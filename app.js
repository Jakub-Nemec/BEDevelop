const express = require('express');
const app = express();

// Import routes
const characterRouter = require('./routes/character');

// Middleware
app.use(express.json());

// Routes
app.use('/characters', characterRouter);

module.exports = app;
