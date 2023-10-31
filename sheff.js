const mongoose = require("mongoose");

const sheffSchema = mongoose.Schema({
  id: Number,
  fName: String,
  sName: String,
  age: Number,
  dishes: String,
});

module.exports = mongoose.model("Sheff", sheffSchema);