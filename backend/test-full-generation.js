const axios = require('axios');

const testDocumentGeneration = async () => {
    try {
        // First login to get token
        console.log('1. Logging in...');
        const loginResponse = await axios.post('http://localhost:5000/api/auth/login', {
            email: 'tester@gmail.com',
            password: 'Test1234'
        });
        
        const token = loginResponse.data.data.token;
        console.log('✅ Login successful, token received\n');
        
        // Generate document
        console.log('2. Generating document...');
        const generateResponse = await axios.post('http://localhost:5000/api/smart-generate/generate', {
            documentType: 'house-rent',
            fieldOverrides: {
                landlordName: 'John Doe',
                landlordFatherName: 'James Doe',
                landlordAddress: '123 Main St',
                companyName: 'Test Company',
                directorName: 'Jane Smith',
                propertyAddress: '456 Business Park',
                monthlyRent: 50000,
                dateOfAgreement: '2024-01-01',
                leaseStartDate: '2024-02-01',
                signingPlace: 'Rawalpindi',
                signingDate: '2024-01-01'
            },
            allowMissingFields: true
        }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        
        console.log('✅ Document generated!');
        console.log('Document ID:', generateResponse.data.data.document.id);
        console.log('HTML URL:', generateResponse.data.data.document.htmlUrl);
        console.log('');
        
        const docId = generateResponse.data.data.document.id;
        
        // Try to fetch the HTML
        console.log('3. Fetching HTML content...');
        const htmlResponse = await axios.get(`http://localhost:5000/api/generate/documents/${docId}/html`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        
        console.log('✅ HTML fetched successfully!');
        console.log('Content length:', htmlResponse.data.length);
        console.log('First 200 characters:', htmlResponse.data.substring(0, 200));
        console.log('\n🎉 DOCUMENT GENERATION WORKING PERFECTLY!');
        
    } catch (error) {
        console.error('❌ Error:', error.response?.data || error.message);
    }
};

testDocumentGeneration();
