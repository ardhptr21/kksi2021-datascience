const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema(
  {
    url: String,
    title: String,
    desription: String,
    date: Date,
  },
  {
    timestamps: {
      createdAt: created_at,
      updatedAt: updated_at,
    },
  }
);

module.exports = mongoose.model("Video", videoSchema);
