var express = require('express');
var router = express.Router();
const filePath = 'C:/Users/zack/Desktop/myChat/views/';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html',{'root': filePath});

});

module.exports = router;
