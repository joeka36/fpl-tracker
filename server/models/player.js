var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
  name: String,
  position: String,
  team: String,
  squad_number: Number,
  img_ref: String,
  cost: Number,
  selected_by_percent: Number;
  form: Number;
  transfer_out_event: Number;
  transfer_in_event: Number;
  total_points: Number;
  event_points: Number;
  ppg: Number;
  goals_scored: Number;
  assists: Number;
  clean_sheets: Number;
  goals_conceded: Number;
  ep_this: Number;
  ep_next: Number;
  influence: Number;
  creativity: Number;
  threat: Number;
  ict_index: Number;
  season_points: [];
  season_name: [];
  past_fixtures_points: [];
  fixtures: [];
});

module.exports = mongoose.model('players', playerSchema);