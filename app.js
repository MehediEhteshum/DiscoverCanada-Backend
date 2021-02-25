const express = require('express');
// const bodyParser = require('body-parser');
const env = require("./env.js");

const app = express();
const port = env.port;

// to make use of req.body instead of req.query
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// connect to MySQL db by creating connection pool
const pool = env.pool;

// GET
let homePath = "/discover-canada/api/home";
let homeGetter = (_, res) => {
    pool.getConnection((err, connection) => {
        if (err) res.json(err);
        connection.query("SELECT id, title, image_url from topic", (err, results) => {
            connection.release(); // return connection to the pool
            if (!err) {
                res.json(results);
            } else {
                res.json(err);
            }
        });
    });
};
app.get(homePath, homeGetter);

// listen on port
app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});
