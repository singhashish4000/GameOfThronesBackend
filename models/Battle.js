const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BattleSchema = new Schema({
  _id: Number,
  name: String,
  year: Number,
  battleNumber: Number,
  attacker_king: String,
  defender_king: String,
  attacker_1: String,
  attacker_2: String,
  attacker_3: String,
  attacker_4: String,
  defender_1: String,
  defender_2: String,
  defender_3: String,
  defender_4: String,
  attackerOutcome: String,
  battleType: String,
  majorDeath: Number,
  majorCapture: Number,
  attackerSize: Number,
  defenderSize: Number,
  attackerCommander: String,
  defenderCommander: String,
  summer: Number,
  location: String,
  region: String,
  note: String
});

module.exports = mongoose.model("Battles", BattleSchema);