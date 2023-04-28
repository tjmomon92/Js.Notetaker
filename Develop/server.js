// required imports
const express = require('express');
const fs = require('fs');
const app = express();
const notes = require('./db/db.json');
const PORT = process.env.PORT || 3001;
const path = require('path');

// Get requests for index and notes HTMLs
app.get('/', (req,res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/', (req,res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// port setup
app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);