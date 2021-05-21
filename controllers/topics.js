const db_connect = require("../db_connect");

// connect to MySQL db by creating connection pool
const pool = db_connect.pool;

let topicsGetter = (_, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            res.json({
                "data": null,
                "error": err
            });
        }
        connection.query("SELECT id, title, image_url, is_province_dependent FROM topic", (err, results) => {
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
