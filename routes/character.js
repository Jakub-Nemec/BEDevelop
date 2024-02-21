const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all characters
router.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM character';
        const { rows } = await db.query(query);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching characters:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Add more routes as needed

module.exports = router;
