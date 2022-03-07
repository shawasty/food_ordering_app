const mongoose = require ('mongoose')


const Schema = mongoose.Schema

const Meal = new Schema(
    {
        name: {type: String, required: true },
        category: {type: String, required: true },
        image: {type: String, required: true },
        calories: {type: Number, required: true },
        price: {type: Number, required: true },

    },
    {timestamps: true}
)




module.exports = mongoose.model('meals', Meal)
