var express = require('express');
var router = express.Router();
var model = require('../models/Pancake');



function addMessageToSuccessfulQuery(obj, msg) {
  var ret = obj;
  ret.message = msg;
  return ret;
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  model.find(function(err,pancakes){
    if (err) {
      res(err);
    } else {
      res.json(pancakes);
    }
  });
});


/*Get by ID */
router.get('/:id', function(req,res,next){
  model.findById(req.params.id, function(err,pancake){
    if (err) console.log(err);
    res.json(pancake);
  });
});

/*create*/
router.post('/', function(req,res,next){
  model.create(req.body,function(err,pancake){
    if (err)console.log(err);
    res.json(pancake);
  });
});

/* Edit */
router.put('/:id', function(req,res,next){
  model.findByIdAndUpdate(req.params.id, req.body, function(err, pancake) {
      if (err)console.log(err);
      res.json(addMessageToSuccessfulQuery(pancake,"Your recipe was updated"));
  });
});


router.patch('/:id', function(req,res,next){
  model.findByIdAndUpdate(req.params.id, req.body, function(err, pancake) {
    if (err)console.log(err);
    res.json(addMessageToSuccessfulQuery(pancake,"Your recipe was updated"));

  });
});


/*destroy*/
router.delete('/:id', function(req,res,next){
  model.findByIdAndRemove(req.params.id,req.body, function(err,pancake){
    if (err)console.log(err);
    res.json(addMessageToSuccessfulQuery(pancake, 'Your recipe was deleted!'));
  });
});



module.exports = router;
