const axios = require('axios');

const API_URL = 'http://localhost:5000/api';

// Test user credentials
const user = {
    email: 'admin@legalyze.com',
    password: 'Admin@123'
};

// Document data
const docData = {
    dateOfAgreement: '2023-10-27',
    landlordName: 'John Landlord',
    landlordFatherName: 'Mr. Senior Landlord',
    landlordAddress: '123 Landlord St',
    companyName: 'Tech Corp',
    directorName: 'Jane Director',
    propertyAddress: '456 Rental Ave',
    monthlyRent: '50000',
    leaseStartDate: '2023-11-01',
    signingPlace: 'Islamabad',
    signingDate: '2023-10-27',
    witness1Name: 'Witness One',
    witness2Name: 'Witness Two'
};

async function testDocumentGeneration() {
    try {
        console.log('🚀 Starting Document Generation Test...');

        // 1. Login
        console.log('\n1️⃣  Logging in...');
        const loginRes = await axios.post(`${API_URL}/auth/login`, user);
        const token = loginRes.data.token;
        console.log('✅ Login successful. Token received.');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        // 2. Generate Document
        console.log('\n2️⃣  Generating House Rent Agreement...');
        const genRes = await axios.post(`${API_URL}/generate/rent-agreement`, docData, config);
        console.log('✅ Document generated successfully!');
        console.log('   ID:', genRes.data.document.id);
        console.log('   File:', genRes.data.document.fileName);
        console.log('   URL:', genRes.data.document.signedUrl.substring(0, 50) + '...');

        // 3. Fetch Documents
        console.log('\n3️⃣  Fetching User Documents...');
        const listRes = await axios.get(`${API_URL}/generate/documents`, config);
        console.log(`✅ Fetched ${listRes.data.count} documents.`);
        
        const newDoc = listRes.data.documents.find(d => d.id === genRes.data.document.id);
        if (newDoc) {
            console.log('✅ Verified: New document found in list.');
        } else {
            console.error('❌ Error: New document NOT found in list.');
        }

        console.log('\n🎉 Test Completed Successfully!');

    } catch (error) {
        console.error('\n❌ Test Failed:', error.response ? error.response.data : error.message);
    }
}

testDocumentGeneration();
