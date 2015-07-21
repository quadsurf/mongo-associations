var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/mongo-associations-lesson')
var meetups = db.get('meetups')

router.get('/', function(req, res, next) {
  meetups.find({}, function (err, documents) {
    if(err) throw err
    res.render('index', { meetups: documents });
  })
});

module.exports = router;
