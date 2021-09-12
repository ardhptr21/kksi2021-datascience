const mongoose = require("mongoose");
const fileSchema = new mongoose.Schema({
  url: String,
  title: String,
  description: String,
});

module.exports = mongoose.model("Video", fileSchema);
