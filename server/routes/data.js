var express = require('express');
var DbClient = require('../DB/DbClient')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   
      var query = { };
      DbClient.getDb()
      .collection("flowerDeatils")
      .find(query)
      .toArray(function(err, result) {
                if (err) {
                    res.status(400).send("Error fetching listings!");
                } else {
                  res.json(result);
                }
      });
});

module.exports = router;
