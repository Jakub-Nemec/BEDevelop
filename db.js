const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://hvyvudcn:xvQqbJ22KEb7auJxdvpPyj5kbC@dontpanic.k42.app/postgres',
});

module.exports = pool;
