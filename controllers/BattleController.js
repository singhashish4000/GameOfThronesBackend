const Battle = require("../models/Battle");

exports.listAllBattles = (req, res) => {
  Battle.find({}, (err, battle) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(battle);
  });
};

exports.listNameOfAllBattles = (req, res) => {
  Battle.find({}, {location: 1}, (err, battles) => {
    if (err) {
      res.status(500).send(err);
    }
    let battleLocations = []
    battles.forEach(battle => {
      battleLocations.push(battle['location'])
    })
    res.status(200).send(battleLocations);
  });
};

exports.countOfAllBattles = (req, res) => {
  Battle.countDocuments({}, (err, count) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(count);
  })
};

exports.search = (req, res) => {
  console.log(req.query)
  console.log(req.params)
  Battle.find(req.query, (err, battles) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log('res', battles)
    res.status(200).send(battles);
  });
};


