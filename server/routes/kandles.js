var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ kandles: [1,2] });
});

module.exports = router;


/* TODO: Param and return of kandles. */