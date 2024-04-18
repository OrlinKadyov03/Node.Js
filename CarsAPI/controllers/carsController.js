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
const updateCar = asyncHandler(async(req,res)=>{
    const car = await Car.findById(req.params.id)
    if(!car){
        res.status(404)
        throw new Error("Car not found")
    }

    const updatedCar = await Car.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )

    res.status(200).json(updatedCar)

})
//@ desc Delete car
//@ route DELETE /api/cars/:id
//@ access public 
const deleteCar = asyncHandler(async(req,res)=>{
    const card = await Car.findById(req.params.id)
    if(!card) {
      res.status(404)
      throw new Error("Car does not exist")    
    }
    else{
     await Car.findByIdAndDelete(req.params.id)
    res.status(200).json(card)
    }
})

//@ desc Get car by id
//@ route GET /api/cars/:id
//@ access public 
const getCarById = asyncHandler(async(req,res)=>{
    const car = await Car.findById(req.params.id)
    if(!car){
        res.status(404)
        throw new Error("Cannot get the car by Id")
    }
        res.status(200).json(car)
})




module.exports = {getCar,createCar,updateCar,deleteCar,getCarById}