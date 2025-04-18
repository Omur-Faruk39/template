const http = require("http");
const get = require("./route/get");
const post = require("./route/post");
const deleteFile = require("./route/delete");
const put = require("./route/put");

const app = {};

app.config = {
  port: 3000,
};

app.ruqResHandler = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method.toLowerCase() === "get") {
    get.get(req, res);
  } else if (req.method.toLowerCase() === "post") {
    post.post(req, res);
  } else if (req.method.toLowerCase() === "delete") {
    deleteFile.delete(req, res);
  } else if (req.method.toLowerCase() === "put") {
    put.put(req, res);
  }
};

app.server = http.createServer(app.ruqResHandler);

app.server.listen(app.config.port, () => {
  console.log(`server in running on port ${app.config.port}`);
});
