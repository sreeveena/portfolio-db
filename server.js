var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 3000;

var app = express();
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var routes = require("./controllers/html_controller.js");
app.use(routes);

var routes1 = require("./controllers/project_controller.js");
app.use(routes1);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});
