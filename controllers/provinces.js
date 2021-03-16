const env = require("../env.js");

// connect to MySQL db by creating connection pool
const pool = env.pool;

let provincesGetter = (_, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            res.json({
                "data": null,
                "error": err
            });
        }
        connection.query("SELECT name from province", (err, results) => {
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

module.exports = provincesGetter;