var os = require('os');
var express = require('express');
var router = express.Router();

var hostname = os.hostname();

var randomFloat = function(min, max) {
  return Math.random() * (max - min) + min;
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Crypto Prices', symbols: {"Symbol 1":randomFloat(1, 100), "Symbol 2":randomFloat(1, 100)}, hostname: hostname });
});

module.exports = router;
