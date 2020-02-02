var express = require("express");
var router = express.Router();
var path = require('path');

//a USE route to home page
router.get('/', function (req, res) {
  res.sendFile('views/index.html', { root: path.join(__dirname, "../public") });
});

// Export routes for server.js to use.
module.exports = router;
