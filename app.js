const express = require("express");

const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
app.use(express.static("public"));
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port:${port}`);
});
//routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/addPost", (req, res) => {
  res.render("add_post");
});
