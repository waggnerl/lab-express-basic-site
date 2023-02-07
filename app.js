const express = require("express");
const app = express();
const port = 3001;

app.use(express.static("public"));

app.get("/profile", (req, res) => {
  res.sendFile(__dirname + "/views/profile.html");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});
app.get("/galery", (req, res) => {
  res.sendFile(__dirname + "/views/galery.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
