const express = require("express");
const bodyParser = require("body-parser");
const battleController = require("./controllers/BattleController");

// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS

app
  .route("/battles")
  .get(battleController.listAllBattles)
  .post(battleController.createNewBattle);

app
  .route("/list")
  .get(battleController.listNameOfAllBattles)

app
  .route("/count")
  .get(battleController.countOfAllBattles)

app
  .route("/search")
  .get(battleController.search)    

app
  .route("/battles/:battleid")
  .get(battleController.readBattle)
  .put(battleController.updateBattle)
  .delete(battleController.deleteBattle);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});