const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const cors = require("cors")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dataPath = './data/data.json';

app.use(cors());

app.get("/specialty", (req, res, next) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    let results = JSON.parse(data);
    res.send(results.results);
  });
});

const server = app.listen(3001, () => {
  console.log("Listening on port %s", server.address().port);
});
