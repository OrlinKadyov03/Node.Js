const asyncHandler = require("express-async-handler")
//@ desc Register a user
//@ route POST /api/users/register
//@ access public 
const registerUser = asyncHandler(async(req,res)=>{
    res.json({msg: "Register the user"})
})

//@ desc Login a user
//@ route POST /api/users/register
//@ access public 
const loginUser = asyncHandler(async(req,res)=>{
    res.json({msg: "Login the user"})
})

//@ desc Current user info
//@ route POST /api/users/current
//@ access private 
const currentUser = asyncHandler(async(req,res)=>{
    res.json({msg: "Current user information"})
})



module.exports = {registerUser,loginUser,currentUser}