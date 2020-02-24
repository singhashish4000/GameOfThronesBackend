const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://<username>:<password>@cluster0-mq0zw.mongodb.net/gameOfThrones?retryWrites=true";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

require("../models/Battle");