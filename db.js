// Importing the Pool class from the pg module
const { Pool } = require('pg');

// Creating a new instance of Pool with connection options
const pool = new Pool({
    // Connection string for accessing the PostgreSQL database
    connectionString: 'postgres://hvyvudcn:xvQqbJ22KEb7auJxdvpPyj5kbC@dontpanic.k42.app/postgres',
});

// Exporting the pool instance to be used by other modules
module.exports = pool;
