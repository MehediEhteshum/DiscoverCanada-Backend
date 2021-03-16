const express = require('express');
// const bodyParser = require('body-parser');
const env = require("./env.js");
const topicsRouter = require("./routes/topics.js");
const provincesRouter = require("./routes/provinces.js");

const app = express();
const port = env.port;

// to make use of req.body instead of req.query
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//routing
let topicsPath = "/discover-canada/api/topics";
let provincesPath = "/discover-canada/api/provinces";

app.use(topicsPath, topicsRouter);
app.use(provincesPath, provincesRouter);

// listen on port
app.listen(port, (err) => {
    if (err) {
        return console.log("ERROR:", err);
    }
    console.log(`Listening on ${port}...`);
});
