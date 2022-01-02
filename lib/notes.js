const fs = require('fs');
const path = require('path');

// Locates element of array based on id. For use in the DELETE request - unfinished
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

// Creates a new note and adds it to the json array
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

module.exports = {
    findById,
    createNewNote
};