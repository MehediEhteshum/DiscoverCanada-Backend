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

app.use(apiRootPath, topicsRouter);
app.use(apiRootPath, provincesRouter);
app.use(apiRootPath, chaptersRouter);
app.use(apiRootPath, specificChaptersRouter);

// listen on port
app.listen(port, (err) => {
    if (err) {
        return console.log("ERROR:", err);
    }
    console.log(`Listening on ${port}...`);
});
