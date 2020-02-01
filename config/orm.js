// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectOne: function(tableInput, condition, cb) {
        var queryString = "SELECT * FROM " + tableInput + " where "+condition+";";
        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    }
};
 

// Export the orm object for the model .
module.exports = orm;
