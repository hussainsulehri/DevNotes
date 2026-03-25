// verify_delete_logic.js
const mongoose = require('mongoose');
const Note = require('./backend/models/Note');

const mongoURI = 'mongodb://localhost:27017/inotebook';

async function testDelete() {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to Mongo');

        // Find a note to delete
        const note = await Note.findOne();
        if (!note) {
            console.log('No notes found in DB to test deletion');
            return;
        }

        console.log('Found note to delete:', note._id);
        console.log('Note user (raw):', note.user);

        // Mock req.user
        const mockUserId = note.user.toString();
        console.log('Mock User ID:', mockUserId);

        // Logic check
        if (note.user.toString() !== mockUserId) {
            console.log('LOGIC ERROR - IDs do not match');
        } else {
            console.log('LOGIC OK - IDs match');
        }

        // Try deletion
        const deletedNote = await Note.findByIdAndDelete(note._id);
        console.log('Deletion result:', deletedNote ? 'Success' : 'Failed');

    } catch (err) {
        console.error('TEST ERROR:', err);
    } finally {
        await mongoose.disconnect();
    }
}

testDelete();
