const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

const API_URL = 'http://localhost:5000/api';

// Test user credentials
const user = {
    email: 'admin@legalyze.com',
    password: 'Admin@123'
};

const createTestPDF = () => {
    const filePath = path.join(__dirname, 'secret_code.pdf');
    // Use Mock PDF format to bypass parsing issues
    const content = `%MOCK-PDF
    CONFIDENTIAL DOCUMENT
    
    Project: Legalyze
    Date: 2025-12-01
    
    This is a confidential document containing sensitive information.
    
    The secret code for the Legalyze project is ALPHA-BETA-GAMMA-99.
    
    Please keep this code secure and do not share it with unauthorized personnel.
    End of document.`;
    
    fs.writeFileSync(filePath, content);
    return filePath;
};

async function testRAG() {
    try {
        console.log('🚀 Starting RAG System Test...\n');

        // 1. Login
        console.log('1️⃣  Logging in...');
        const loginRes = await axios.post(`${API_URL}/auth/login`, user);
        const token = loginRes.data.data.token;
        console.log('✅ Login successful');

        const config = {
            headers: { 
                Authorization: `Bearer ${token}`
            }
        };

        // 2. Create and Upload PDF
        console.log('\n2️⃣  Creating and Uploading Test PDF...');
        const pdfPath = createTestPDF();
        const formData = new FormData();
        formData.append('document', fs.createReadStream(pdfPath));

        const uploadRes = await axios.post(`${API_URL}/documents/upload`, formData, {
            headers: {
                ...config.headers,
                ...formData.getHeaders()
            }
        });
        
        const docId = uploadRes.data.data.id;
        console.log('✅ PDF Uploaded. ID:', docId);
        
        // Clean up local file
        fs.unlinkSync(pdfPath);

        // 3. Wait for processing
        console.log('\n3️⃣  Waiting for document processing...');
        // Poll every 2 seconds
        let processed = false;
        let attempts = 0;
        while (!processed && attempts < 10) {
            await new Promise(r => setTimeout(r, 2000));
            const docRes = await axios.get(`${API_URL}/documents/${docId}`, config);
            if (docRes.data.data.processed) {
                processed = true;
                console.log('✅ Document processed successfully!');
                console.log('   Chunks:', docRes.data.data.chunkCount);
            } else {
                process.stdout.write('.');
                attempts++;
            }
        }

        if (!processed) {
            throw new Error('Document processing timed out');
        }

        // 4. Ask Question
        console.log('\n4️⃣  Asking question about the secret code...');
        const chatRes = await axios.post(`${API_URL}/chat`, {
            message: 'What is the secret code mentioned in the document?',
            documentIds: [docId]
        }, config);

        console.log('\n🤖 AI Response:');
        console.log('---------------------------------------------------');
        console.log(chatRes.data.data.message);
        console.log('---------------------------------------------------');

        if (chatRes.data.data.message.includes('ALPHA-BETA-GAMMA-99')) {
            console.log('\n✅ TEST PASSED: AI successfully retrieved the secret code!');
        } else {
            console.log('\n❌ TEST FAILED: AI did not mention the secret code.');
        }

        // 5. Cleanup
        console.log('\n5️⃣  Cleaning up...');
        await axios.delete(`${API_URL}/documents/${docId}`, config);
        console.log('✅ Test document deleted');

    } catch (error) {
        console.error('\n❌ Test Failed:', error.response ? error.response.data : error.message);
    }
}

testRAG();
