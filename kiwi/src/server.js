const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "../dist/kiwi.html");
  const content = fs.readFileSync(filePath, "utf-8");

  res.send(content);
});

app.listen(9002, () => {
  console.log("Server is running on http://localhost:9002");
});
