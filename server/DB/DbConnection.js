var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://llfb:Aa123456@flowershop.vziqkyx.mongodb.net/?retryWrites=true&w=majority";
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



