const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.json({ Message: "Home Page" });
});
app.get("/about", (req, res) => {
  res.json({ Message: "About Page" });
});

app.get("/contacts", (req, res) => {
  res.json({ Message: "Contacts Page" });
});

app.get("/", (req, res) => {
  res.json({ Message: "Root Page" });
});

app.listen(3001, () => {
  console.log("Server is listening.....on port 3001");
});
