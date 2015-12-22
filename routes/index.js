var express = require('express');
var router = express.Router();

var siteData = {
  title: 'Pancake API',
  version: '1.0',
  authors: 'WDI ROGER PANELLA!',
  date: 'Dec 21st, 2015'
};

router.get('/', function(req, res, next) {
  res.render('index', siteData);
});

module.exports = router;
