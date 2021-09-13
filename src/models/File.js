const mongoose = require("mongoose");
const fileSchema = new mongoose.Schema(
  {
    url: String,
    title: String,
    description: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("File", fileSchema);
