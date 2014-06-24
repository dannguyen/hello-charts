var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home Express' });
});


router.get('/hello', function(req, res){
  res.render('index', {title: 'Hello', deck: 'YOUYOU'});
})




module.exports = router;
