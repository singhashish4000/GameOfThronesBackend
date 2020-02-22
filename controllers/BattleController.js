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
  Battle.find(req.query, (err, battles) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log('res', battles)
    res.status(200).send(battles);
  });
};

exports.createNewBattle = (req, res) => {
  let newBattle = new Battle(req.body);
  newBattle.save((err, battle) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(battle);
  });
};

exports.readBattle = (req, body) => {
  Battle.findById(req.params.battleid, (err, battle) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(battle);
  });
};

exports.updateBattle = (req, res) => {
  Battle.findOneAndUpdate(
    { _id: req.params.battleid },
    req.body,
    { new: true },
    (err, battle) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(battle);
    }
  );
};

exports.deleteBattle = (req, res) => {
  Battle.remove({ _id: req.params.battleid }, (err, battle) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Battle successfully deleted" });
  });
};
