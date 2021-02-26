const env = require("../env.js");

// connect to MySQL db by creating connection pool
const pool = env.pool;

let topicsGetter = (_, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            res.json({
                "data": null,
                "error": err
            });
        }
        connection.query("SELECT id, title, image_url from topic", (err, results) => {
            connection.release(); // return connection to the pool
            if (!err) {
                res.json({
                    "data": results,
                    "error": null
                });
            } else {
                res.json({
                    "data": null,
                    "error": err
                });
            }
        });
    });
};

module.exports = topicsGetter;
