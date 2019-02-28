var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('/users call');
  res.render('users', { title: 'users page' });
});

module.exports = router;
