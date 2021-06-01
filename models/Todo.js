const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = Todo = mongoose.model("todos", TodoSchema);
