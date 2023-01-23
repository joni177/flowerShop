var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://yon:212250369@cluster0.nise7w8.mongodb.net/?retryWrites=true&w=majority";
var dbConnection;

module.exports =  {
    connectToServer : function (callback) {
        MongoClient.connect(url,async function(err, db) {
            if (err) {
               console.log(err);
            }else{
               console.log("Successfully connected to MongoDB.");
               dbConnection = db.db("flower_shop");
               
            }
            
           })  ;  
    },
    getDb: function () {
        return dbConnection;
      },
};



