var express = require('express');
var router = express.Router();
// middleware.js

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'My-Profile' },);
});

module.exports = router;
