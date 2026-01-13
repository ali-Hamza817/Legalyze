const axios = require('axios');

const API_URL = 'http://localhost:5000/api';

// Test user credentials
const user = {
    email: 'admin@legalyze.com',
    password: 'Admin@123'
};

async function testChatPersistence() {
    try {
        console.log('🚀 Starting Chat Persistence Test...');

        // 1. Login
        console.log('\n1️⃣  Logging in...');
        const loginRes = await axios.post(`${API_URL}/auth/login`, user);
        const token = loginRes.data.data.token;
        console.log('✅ Login successful.');
        console.log('🔑 Token received:', token.substring(0, 20) + '...');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        // 2. Create a new chat
        console.log('\n2️⃣  Creating a new chat...');
        const chatRes = await axios.post(`${API_URL}/chat`, {
            message: 'Hello, this is a test message for persistence.'
        }, config);
        const chatId = chatRes.data.data.conversationId;
        console.log('✅ Chat created. ID:', chatId);

        // 3. Verify it exists in list
        console.log('\n3️⃣  Fetching conversations...');
        let listRes = await axios.get(`${API_URL}/chat/conversations`, config);
        let found = listRes.data.data.find(c => c.id === chatId);
        
        if (found) {
            console.log('✅ Verified: Chat found in list immediately.');
        } else {
            console.error('❌ Error: Chat NOT found in list immediately.');
            return;
        }

        // 4. Delete the chat
        console.log('\n4️⃣  Deleting the chat...');
        await axios.delete(`${API_URL}/chat/conversations/${chatId}`, config);
        console.log('✅ Delete request sent.');

        // 5. Verify it is gone
        console.log('\n5️⃣  Fetching conversations again...');
        listRes = await axios.get(`${API_URL}/chat/conversations`, config);
        found = listRes.data.data.find(c => c.id === chatId);

        if (!found) {
            console.log('✅ Verified: Chat is GONE from list after delete.');
        } else {
            console.error('❌ Error: Chat STILL PRESENT in list after delete.');
        }

    } catch (error) {
        console.error('\n❌ Test Failed:', error.response ? error.response.data : error.message);
    }
}

testChatPersistence();
