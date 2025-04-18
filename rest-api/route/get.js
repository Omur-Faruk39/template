const url = require("url");
const fs = require("fs");
const path = require("path");

const app = {};

app.get = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const id = parsedUrl.query.id;
  console.log(parsedUrl);

  if (!id) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Missing 'id' query parameter");
    return;
  }

  const fileName = path.resolve(__dirname, "../data", `${id}.json`);

  if (!fs.existsSync(fileName)) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("File not found!");
    return;
  }

  const readStream = fs.createReadStream(fileName, "utf-8");

  let data;

  readStream.on("data", (chunk) => {
    if (!data) {
      data = chunk;
    } else {
      data += chunk;
    }
  });

  readStream.on("end", () => {
    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(data);
  });

  readStream.on("error", (err) => {
    console.error("Error reading file:", err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Error reading file!");
  });
};

module.exports = app;
