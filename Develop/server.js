// required imports
const express = require('express');
const fs = require('fs');
const app = express();
const notes = require('./db/db.json');
const PORT = process.env.PORT || 3001;

// port setup
app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);