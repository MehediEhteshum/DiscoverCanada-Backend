require('dotenv').config();
const mysql = require('mysql');

const port = process.env.PORT;

// connect to MySQL db
const pool = mysql.createPool({
    connectionLimit: process.env.CONNECTION_LIMIT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = {
    port: port,
    pool: pool
};
