const express = require("express");
const app = express();
const port = 3000;
const { engine } = require("express-handlebars");

// Import other js fils
const generatePassword = require("./public/javascripts/generatePassword");

app.use(express.static("public"));
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

// To parse request body object
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  console.log(`The password is ${generatePassword(req.body)}`);
  res.render("index");
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}.`);
});
