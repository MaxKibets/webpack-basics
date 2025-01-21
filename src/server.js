const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "../dist/index.html");
  const content = fs.readFileSync(filePath, "utf-8");

  res.send(content);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
