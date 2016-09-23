/**
 * Created by Rachel on 2016. 8. 25..
 */

var express = require('express');
var router = express.Router();

var surveyResultDB = require('../db/SurveyResult');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('survey');
});

router.post('/end', function(req, res, next) {
  var params = req.body;
  console.log('[params] ' + JSON.stringify(params));

  var list = [params];
  surveyResultDB.bulkCreate(list, {returning: true}).then(function(results) {
    res.status(200).send({status: 'success'});
  });
  
});

module.exports = router;