const env = require("../env.js");

// connect to MySQL db by creating connection pool
const pool = env.pool;

let topicsGetter = (_, res) => {
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

module.exports = topicsGetter;
