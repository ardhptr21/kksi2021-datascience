const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    role: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("User", userSchema);
