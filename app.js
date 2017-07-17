var express = require('express');
var app = express();

// Landing Page
app.get("/", function(req, res) {
  res.render("home.ejs", {title: "Home"});
});

// All Airplanes Page
app.get("/airplanes", function(req, res) {
  res.render("airplanes/index.ejs", {title: "Airplanes"});
});

// Port 3000 Listener
app.listen(3000, function() {
  console.log("Listening on Port 3000...");
});