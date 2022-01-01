const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const { notes } = require('./db/db');

app.get('/api/notes', (req, res) => {
    const result = notes;
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

function findById(id, notes) {
    const result = notes.filter(animal => animal.id === id)[0];
    return result;
}

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
