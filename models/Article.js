const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const ArticleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Article = mongoose.model("article", ArticleSchema);
