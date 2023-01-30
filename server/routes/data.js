var express = require('express');
var DbClient = require('../DB/DbClient')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   
      var query = { };
      //console.log( "loggggggg" , DbClient.getDb());
      DbClient.getDb()
      .collection("shopItemsData")
      .find(query)
      .toArray(function(err, result) {
                if (err) {
                    res.status(400).send("Error fetching listing")
                    console.log(result);
                }else{
                  res.send(result);          
                }
      });
});


router.post('/newItem', function (req, res) {
  console.log(req.body);
  var myobj = req.body;
  DbClient.getDb()
  .collection("shopItemsData")
  .insertOne(myobj, function(err, res) {
    if (err) {
      console.log(err);}
      else{
        console.log("1 document inserted");
      }
    
  });
  res.send(JSON.stringify(req.body));
  
});


router.post('/editItem', function (req, res) {
  console.log(req.body);
  var myobj = req.body;
  var myquery = { "id" : myobj.id };
  var newvalues = { $set: myobj };
  console.log("myquery : => " , myquery);
  console.log("newvalues : => " , newvalues);
  DbClient.getDb()
  .collection("shopItemsData")
  .updateOne(myquery,newvalues, function(err, res) {
    if (err) {
      console.log(err);}
      else{
        console.log("1 document updated");
      }
    
  });
  res.send(JSON.stringify(req.body));
  
});



router.delete('/deleteItem', (req, res) => {
  console.log(req.body.id);
  var myquery = { id: req.body.id };
  DbClient.getDb().collection("shopItemsData").deleteOne(myquery, function(err, obj) {
    if (err) {
      console.log("aaaaaaaaaaaaaaaaaa");
      console.log(err);}
      else{
        console.log("1 document deleted");
      }
  });
   res.send("DELETE Request Called")
})

module.exports = router;
