const express = require('express');
const router = express.Router(); // Create a new router instance
const db = require('../db'); // Import the database module

// Get all characters
router.get('/', async (req, res) => {
    try {
        // SQL query to select all characters from the database
        const query = 'SELECT * FROM character';
        // Execute the query and get the result rows
        const { rows } = await db.query(query);
        // Send the result rows as JSON response
        res.json(rows);
    } catch (error) {
        // If an error occurs during execution, log the error and send a 500 status with an error message
        console.error('Error fetching characters:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router; // Export the router for use in other modules
