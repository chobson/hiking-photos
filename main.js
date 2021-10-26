const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.get(["/"], (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get(["bundle.js", "/bundle.js"], (req, res) => {
  res.sendFile(path.join(__dirname, '/bundle.js'))
})

app.get(["simple.css", "/simple.css"], (req, res) => {
  res.sendFile(path.join(__dirname, '/simple.css'))
})

app.listen(port, () => console.log(`Listening on port ${port}.`));