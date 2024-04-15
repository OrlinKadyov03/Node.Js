const asyncHandler = require("express-async-handler")
const Car = require("../models/carModel.js")


//@ desc Get all cars
//@ route GET /api/cars
//@ access public 
const getCar = asyncHandler(async(req,res)=>{
    const cars = await Car.find()
    res.status(200).json(cars)
})
//@ desc Create car
//@ route POST /api/cars
//@ access public 
const createCar = asyncHandler(async(req,res)=>{
    const {brand,model,horsePower} = req.body
    console.log("The request body is:", req.body)
    if(!brand || !model || !horsePower){
        res.status(400)
        throw new Error("Not filled correctly")
    }
    const car = await Car.create({
        brand,
        model,
        horsePower
    })

    res.status(201).json(car)
})
//@ desc Update car
//@ route PUT /api/cars/:id
//@ access public 
const updateCar = (req,res)=>{
    res.status(200).json({msg: `Car updated ${req.params.id}`})
}
//@ desc Delete car
//@ route DELETE /api/cars/:id
//@ access public 
const deleteCar = (req,res)=>{
    res.status(200).json({msg: `Car deleted ${req.params.id}`})
}

//@ desc Get car by id
//@ route GET /api/cars/:id
//@ access public 
const getCarById = (req,res)=>{
    res.status(200).json({msg: `Get car by id ${req.params.id}`})
}




module.exports = {getCar,createCar,updateCar,deleteCar,getCarById}