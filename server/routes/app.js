var async = require("async");
var express = require('express');
var router = express.Router();
var Player = require('../models/player');

router.get('/player/:id', (req, res) => {;
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
  Promise.all([
    Player.find().sort('-ep_this').limit(1)
      .exec(function(err, topPlayer) {
      if(err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }}),
    Player.find().sort('-selected_by_percent').limit(3)
        .exec(function(err, topSelected){
          if(err) {
            return res.status(500).json({
              title: 'An error occureed',
              error: err
            });
      }}),
    Player.find().sort('-transfer_in_event').limit(5)
        .exec(function(err, topMarketIn){
          if(err) {
            return res.status(500).json({
              title: "Can't find top transferred players",
              error: err
            });
          }
        }),
    Player.find().sort('-transfer_out_event').limit(5)
        .exec(function(err, topMarketOut){
          if(err) {
            return res.status(500).json({
              title: "Can't find top transferred players",
              error: err
            });
          }
        })
  ]).then(function(result) {
    // res.send("Success");
    res.status(200).json({
          message: 'Success',
          obj: result,
          // topSelecteds: topSelected,
          // topTransferred: topMarket,
          // topIn: topMarketIn,
          // topOut: topMarketOut
    });
  })
  // res.send("Success");

        
})

module.exports = router;

