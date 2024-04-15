const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    brand: {
        type: String,
        required: [true,"Please add the brand"]
    },
    model: {
        type: String,
        required: [true, "Please add the model"]
    },
    horsePower: {
        type: String,
        required: [true, "Please add the horsepower"]
    },
},{
  timestamps: true
})

module.exports = mongoose.model("Car",carSchema)