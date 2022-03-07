const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mealSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    calories: { type: String, required: true },
    price: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("meal", mealSchema);
