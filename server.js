// server.js file should require the basic npm packages we've used in class: express and path

// Dependencies
var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");

// Express app
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,"./app/public")));

// Handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type:"application/vnd.api+json" }));

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});









