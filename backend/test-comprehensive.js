const axios = require('axios');

const API_URL = 'http://localhost:5000/api';

// Test user credentials
const user = {
    email: 'admin@legalyze.com',
    password: 'Admin@123'
};

async function comprehensiveTest() {
    try {
        console.log('🚀 Starting Comprehensive Chat Test...\n');

        // 1. Login
        console.log('1️⃣  Logging in...');
        const loginRes = await axios.post(`${API_URL}/auth/login`, user);
        const token = loginRes.data.data.token;
        console.log('✅ Login successful');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        // 2. Create first chat
        console.log('\n2️⃣  Creating first chat...');
        const chat1Res = await axios.post(`${API_URL}/chat`, {
            message: 'Hello, I need help with a rental agreement'
        }, config);
        const chat1Id = chat1Res.data.data.conversationId;
        const chat1Title = chat1Res.data.data.conversation.title;
        console.log('✅ Chat 1 created');
        console.log('   ID:', chat1Id);
        console.log('   Title:', chat1Title);

        // 3. Send another message to same chat
        console.log('\n3️⃣  Sending follow-up message...');
        const chat1Msg2 = await axios.post(`${API_URL}/chat`, {
            message: 'What should I include in the agreement?',
            conversationId: chat1Id
        }, config);
        console.log('✅ Message sent, title:', chat1Msg2.data.data.conversation.title);

        // 4. Create second chat
        console.log('\n4️⃣  Creating second chat...');
        const chat2Res = await axios.post(`${API_URL}/chat`, {
            message: 'What are the legal requirements for an NDA?'
        }, config);
        const chat2Id = chat2Res.data.data.conversationId;
        const chat2Title = chat2Res.data.data.conversation.title;
        console.log('✅ Chat 2 created');
        console.log('   ID:', chat2Id);
        console.log('   Title:', chat2Title);

        // 5. List all conversations
        console.log('\n5️⃣  Fetching all conversations...');
        const listRes = await axios.get(`${API_URL}/chat/conversations`, config);
        console.log(`✅ Found ${listRes.data.data.length} conversations:`);
        listRes.data.data.forEach((conv, i) => {
            console.log(`   ${i + 1}. ${conv.title} (${conv.messageCount} messages)`);
        });

        // 6. Get full conversation details
        console.log('\n6️⃣  Getting full details of first chat...');
        const detailsRes = await axios.get(`${API_URL}/chat/conversations/${chat1Id}`, config);
        console.log('✅ Retrieved conversation:', detailsRes.data.data.title);
        console.log(`   Messages: ${detailsRes.data.data.messages.length}`);

        // 7. Delete second chat
        console.log('\n7️⃣  Deleting second chat...');
        await axios.delete(`${API_URL}/chat/conversations/${chat2Id}`, config);
        console.log('✅ Chat deleted');

        // 8. Verify deletion
        console.log('\n8️⃣  Verifying deletion...');
        const listRes2 = await axios.get(`${API_URL}/chat/conversations`, config);
        const stillExists = listRes2.data.data.find(c => c.id === chat2Id);
        if (!stillExists) {
            console.log('✅ Confirmed: Chat 2 is deleted');
        } else {
            console.error('❌ Error: Chat 2 still exists!');
        }

        console.log(`\n📊 Final count: ${listRes2.data.data.length} conversation(s)`);
        
        // 9. Cleanup - delete remaining chat
        console.log('\n9️⃣  Cleaning up...');
        await axios.delete(`${API_URL}/chat/conversations/${chat1Id}`, config);
        console.log('✅ Cleanup complete');

        console.log('\n🎉 All tests passed!');

    } catch (error) {
        console.error('\n❌ Test Failed:', error.response ? error.response.data : error.message);
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        }
    }
}

comprehensiveTest();
