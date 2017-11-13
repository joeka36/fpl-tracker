var express = require('express');
var router = express.Router();
var Player = require('../models/player');

router.get('/player/:id', (req, res) => {;
  // console.log(typeof req.param.countryName);
  Player.findById(req.params.id, function(err, foundPlayer){
    if(err){
      return res.status(500).json({
          title: 'An error occurred',
          error: err
      });
    }
    res.status(200).json({
        message: 'Success',
        obj: foundPlayer
      });
  })
});

router.get('/', (req, res) => {
  res.send("Success");
});

module.exports = router;

