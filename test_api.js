 // test_api.js
async function testApi() {
    const baseUrl = 'http://localhost:5000/api';
    try {
        // 1. Create User
        console.log('--- Registering User ---');
        const registerRes = await fetch(`${baseUrl}/auth/create_user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: "Test User",
                email: `test${Date.now()}@test.com`,
                password: "password123"
            })
        });
        const registerJson = await registerRes.json();
        console.log('Register Status:', registerRes.status);
        console.log('Register Response:', registerJson);

        if (!registerJson.token) {
            console.error('Registration failed, no token');
            return;
        }

        const token = registerJson.token;

        // 2. Fetch User Details
        console.log('\n--- Fetching User Details ---');
        const getUserRes = await fetch(`${baseUrl}/auth/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        });
        console.log('Get User Status:', getUserRes.status);
        const getUserRaw = await getUserRes.text();
        console.log('Get User Raw Response:', getUserRaw);
        if (getUserRes.ok) {
            console.log('Get User Response:', JSON.parse(getUserRaw));
        }

        // 3. Add Note
        console.log('\n--- Adding Note ---');
        const addNoteRes = await fetch(`${baseUrl}/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            },
            body: JSON.stringify({
                title: "Test Note",
                description: "Test Description",
                tag: "Test Tag"
            })
        });
        console.log('Add Note Status:', addNoteRes.status);
        const addNoteJson = await addNoteRes.json();
        console.log('Add Note Response:', addNoteJson);

    } catch (err) {
        console.error('API Test Error:', err);
    }
}

testApi();
