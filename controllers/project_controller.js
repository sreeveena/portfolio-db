var express = require("express");
var router = express.Router();
var path = require('path');

var projects = require("../models/projects.js");

//a USE route to home page
router.get('/api/projects',function (req, res) {
    projects.selectAll(function(data) {
        //    console.log("select one " + condition);
        //    console.log(data[0]);
        console.log(data[0]);
        res.json(data);
    });
  });
  
// Export routes for server.js to use.
module.exports = router;