const fs = require("fs");
const url = require("url");
const path = require("path");

const app = {};

app.delete = (req, res) => {
  const pathUrl = url.parse(req.url, true);
  console.log(pathUrl);

  const fileName = path.resolve(
    __dirname,
    "../data",
    `${pathUrl.query.id}.json`
  );

  fs.unlink(fileName, (err) => {
    if (err) {
      res.statusCode = 500;
      res.end(JSON.stringify("file not found"));
    } else {
      res.statusCode = 204;
      res.end(JSON.stringify("file deleted successfully"));
    }
  });
};

module.exports = app;
