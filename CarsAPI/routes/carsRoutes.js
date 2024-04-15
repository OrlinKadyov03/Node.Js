const express = require('express')
const { getCar, createCar, getCarById, updateCar, deleteCar } = require('../controllers/carsController')
const router = express.Router()

router.route("/").get(getCar).post(createCar)

router.route("/:id").get(getCarById).put(updateCar).delete(deleteCar)

module.exports = router