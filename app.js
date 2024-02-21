// Importing the express module
const express = require('express');

// Creating an Express application instance
const app = express();

// Importing routes
const characterRouter = require('./routes/character');

// Middleware to parse incoming JSON data
app.use(express.json());

// Defining routes
app.use('/characters', characterRouter);

// Exporting the Express application instance
module.exports = app;
