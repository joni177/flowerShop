var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://llfb:llfb@familybudget.zu5kqkx.mongodb.net/?retryWrites=true&w=majority";
var dbConnection;

module.exports =  {
    connectToServer : function (callback) {
        MongoClient.connect(url,async function(err, db) {
            if (err) {
               console.log(err);
            }else{
               console.log("Successfully connected to MongoDB.");
               dbConnection = db.db("FlowerShop");
               
            }
            
           })  ;  
    },
    getDb: function () {
        return dbConnection;
      },
};



