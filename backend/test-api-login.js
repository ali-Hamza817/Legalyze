const axios = require('axios');

const testLogin = async () => {
    try {
        console.log('Testing login API...');
        
        const response = await axios.post('http://localhost:5000/api/auth/login', {
            email: 'tester@gmail.com',
            password: 'Test1234'
        });
        
        console.log('✅ Login successful!');
        console.log('Response:', JSON.stringify(response.data, null, 2));
        
        if (response.data.success && response.data.data.token) {
            console.log('\n🎉 Token received:', response.data.data.token.substring(0, 50) + '...');
            console.log('👤 User:', response.data.data.user.email);
        }
        
    } catch (error) {
        console.error('❌ Login failed!');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        } else {
            console.error('Error:', error.message);
        }
    }
};

testLogin();
