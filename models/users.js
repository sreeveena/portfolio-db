// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var projects = {
    selectOne: function(condition, cb) {
    orm.selectOne("projects", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (html_controller.js).
module.exports = projects;
