const express = require("express");

const exphbs = require("express-handlebars");

var PORT = process.env || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(exress.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes and give the server access to the routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes)

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost: " + PORT)
})

