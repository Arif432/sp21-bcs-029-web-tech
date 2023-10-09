var expressLayouts = require("express-ejs-layouts");
let express = require("express");
let server = express();
server.use(express.static("public"));
server.set("view engine", "ejs");
server.use(expressLayouts);

server.get("/landing", function (req, res) {
    res.render("landing", { layout: false }); 
});
server.get("/", function (req, res) {
  res.send("<h1>landing page</h1>");
});

server.listen(3000, function () {
  console.log("Server Started at localhost landmark:3000");
});
