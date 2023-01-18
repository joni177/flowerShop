
var db = require('./DbConnection.js')


if ( con == undefined ) {
    var con = db.connectToServer();
   
}

module.exports =  db;



