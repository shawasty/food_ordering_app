const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ordersSchema = new Schema(
  {
    userId: { type: String, required: true },
    meals: [
        { 
            mealId:{String, 
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ],
    amount: {type: Number, required: true},
    address: {type: Object, required: true},

   
  },
  { timestamps: true }
);

module.exports = mongoose.model("orderItems", ordersSchema);