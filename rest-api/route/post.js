const fs = require("fs");
const path = require("path");

const app = {};

app.post = (req, res) => {
  let data = "";

  req.on("data", (chunk) => {
    data = chunk;
  });

  req.on("end", (err) => {
    if (err) {
      res.statusCode = 400;
      res.end(JSON.stringify("sending data error"));
    } else {
      const fileName = path.resolve(
        __dirname,
        "../data",
        `${JSON.parse(data).id}.json`
      );

      fs.writeFile(fileName, data, { flag: "wx" }, (err1) => {
        if (err1) {
          res.statusCode = 500;
          res.end(JSON.stringify("creating file error"));
        } else {
          res.statusCode = 201;
          res.end(JSON.stringify("file created sucessfully"));
        }
      });
    }
  });
};

module.exports = app;
