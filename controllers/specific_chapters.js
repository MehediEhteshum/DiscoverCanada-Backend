const db_connect = require("../db_connect");

// connect to MySQL db by creating connection pool
const pool = db_connect.pool;

let specificChaptersGetter = (req, res) => {
    const topic_id = req.params.topic_id;
    const province_name = req.params.province_name;
    let queryString;
    if (province_name === "All Provinces") {
        queryString = "SELECT title, pdf_url, web_url FROM chapter WHERE topic_id=?";
    } else {
        queryString = "SELECT title, pdf_url, web_url FROM chapter WHERE topic_id=? AND province_name=?";
    }
    pool.getConnection((err, connection) => {
        if (err) {
            res.json({
                "data": null,
                "error": err
            });
        }
        connection.query(queryString, [topic_id, province_name], (err, results) => {
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

module.exports = specificChaptersGetter;
