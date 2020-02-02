var express = require("express");
var router = express.Router();
var path = require('path');

var projects = require("../models/projects.js");

//a USE route to home page
router.get('/api/projects', function (req, res) {
  projects.selectAll(function (data) {
    res.json(data);
  });
});

// Export routes for server.js to use.
module.exports = router;