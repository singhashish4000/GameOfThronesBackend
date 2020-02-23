const express = require("express");
var cors = require('cors')
const bodyParser = require("body-parser");
const battleController = require("./controllers/BattleController");

// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
// API ENDPOINTS

app
  .route("/battles")
  .get(battleController.listAllBattles)

app
  .route("/list", cors())
  .get(battleController.listNameOfAllBattles)

app
  .route("/count")
  .get(battleController.countOfAllBattles)

app
  .route("/search/:keys?", cors())
  .get(battleController.search)


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});