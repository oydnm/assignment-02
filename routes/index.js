var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get about page */
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About me'});
});

/* projects page*/
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});
/*contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me'});
});

module.exports = router;
