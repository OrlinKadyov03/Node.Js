const express = require("express")
const errorHandler = require("errorhandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config()

connectDb()
const app = express()

const port = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/cars",require("./routes/carsRoutes"))
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})