const express = require('express');
// const bodyParser = require('body-parser');
const env = require("./env");
const topicsRouter = require("./routes/topics");
const provincesRouter = require("./routes/provinces");
const chaptersRouter = require("./routes/chapters");
const specificChaptersRouter = require("./routes/specific_chapters");

const app = express();
const port = env.port;

// to make use of req.body instead of req.query
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//routing
const apiRootPath = "/discover-canada/api";
const topicsPath = "/discover-canada/api/topics";
const provincesPath = "/discover-canada/api/provinces";
const chaptersPath = "/discover-canada/api/chapters";

app.use(topicsPath, topicsRouter);
app.use(provincesPath, provincesRouter);
app.use(chaptersPath, chaptersRouter);
app.use(apiRootPath, specificChaptersRouter);

// listen on port
app.listen(port, (err) => {
    if (err) {
        return console.log("ERROR:", err);
    }
    console.log(`Listening on ${port}...`);
});
