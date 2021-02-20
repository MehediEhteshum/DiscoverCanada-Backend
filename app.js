const express = require('express');
// const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

// to make use of req.body instead of req.query
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// connect to MySQL db
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'discover_canada'
});

// GET
let homePath = "/api/discover-canada/home";
let homeGetter = (_, res) => {
    pool.getConnection((err, connection) => {
        if (err) console.log(err);
        connection.query("SELECT * FROM topic", (err, results) => {
            connection.release(); // return connection to the pool
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        });
    });
};
app.get(homePath, homeGetter);

// listen on port
app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});