// required imports
const express = require('express');
const fs = require('fs');
const app = express();
const notes = require('./db/db.json');
const PORT = process.env.PORT || 3001;
const path = require('path');

// Middleware on Public folder
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Get requests for index and notes HTMLs
app.get('/', (req,res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/', (req,res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Helper functions for writing JSON
const writingFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info (`Written to ${destination}`)
);
const append = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsed = JSON.parse(data);
            parsed.push(content);
            writingFile(file, parse);
        }
    })
};

// port setup
app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);