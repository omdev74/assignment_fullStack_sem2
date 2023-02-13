const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = new express();
app.listen(4000, () => {
  console.log("App listening on port 4000");
});

app.set("view engine", "ejs");

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/g", (req, res) => {
  res.render("g");
});
app.get("/g2", (req, res) => {
  res.render("g2");
});
app.get("/dashboard", (req, res) => {
  res.render("dashboard");
  // res.end("Welcome to dashboard");

  // res.sendFile(path.resolve(__dirname,"pages/contact.html"))
});

app.get("/login", (req, res) => {
  console.log(req);

  res.render("login")
  // console.log(req.params);

  // res.sendFile(path.resolve(__dirname,"pages/contact.html"))
});
