const fs = require("fs");
const url = require("url");
const path = require("path");

const app = {};

app.put = (req, res) => {
  const pathUrl = url.parse(req.url, true);

  // Construct the file path using the query parameter
  const fileName = path.resolve(
    __dirname,
    "../data",
    `${pathUrl.query.id}.json`
  );

  let body = "";

  // Collect the incoming data
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    // Parse the request body into JSON
    let updates;
    try {
      updates = JSON.parse(body);
    } catch (err) {
      res.statusCode = 400; // Bad request if the JSON is invalid
      return res.end(JSON.stringify("Invalid JSON in request body"));
    }

    // Read the existing file data
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          res.statusCode = 404; // File not found
          return res.end(JSON.stringify("File not found"));
        } else {
          res.statusCode = 500; // Internal server error
          return res.end(JSON.stringify("Error reading file"));
        }
      }

      let fileData;
      try {
        fileData = JSON.parse(data); // Parse the existing file data
      } catch (err) {
        res.statusCode = 500; // Internal server error
        return res.end(JSON.stringify("File contains invalid JSON"));
      }

      // Update specific properties
      const updatedData = { ...fileData, ...updates };

      // Write the updated data back to the file
      fs.writeFile(fileName, JSON.stringify(updatedData, null, 2), (err) => {
        if (err) {
          res.statusCode = 500; // Internal server error
          return res.end(JSON.stringify("Error updating file"));
        }

        res.statusCode = 200; // Success
        res.end(JSON.stringify("File updated successfully"));
      });
    });
  });

  req.on("error", () => {
    res.statusCode = 500;
    res.end(JSON.stringify("Error reading request data"));
  });
};

module.exports = app;
