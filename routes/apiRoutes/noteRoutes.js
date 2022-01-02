const router = require('express').Router();
const { findById, createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

// GET /api/notes reads db.json and returns the contents
router.get('/notes', (req, res) => {
    const result = notes;
    if (result) {
        res.json(result);
    }
});

// POST /api/notes receives req body and adds it to db.json
router.post('/notes', (req, res) => {
    // Create new note and sets id based on the index of the array
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

// BONUS: DELETE /api/notes/:id code - unfinished
router.delete('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    }
})

module.exports = router;