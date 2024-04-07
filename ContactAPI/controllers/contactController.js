const asyncHandler = require("express-async-handler")
//@ desc Get all contacts
//@ route GET /api/contacts
//@ access public 
const getContact = asyncHandler((req,res)=>{
    res.status(200).json({msg:'Get all contacts'})
})
//@ desc Create contact
//@ route POST /api/contacts
//@ access public 
const createContact = asyncHandler( (req,res)=>{
    const {name,email,phone} = req.body.name
    console.log("The request body is :",req.body)
    if(!name || !email || !phone)
    {
       res.status(400)
       throw new Error("Not filled correctly")
    }
        res.status(201).json({msg: 'Contact created'})
 

})

//@ desc Get contact by id
//@ route GET /api/contacts/:id
//@ access public 
const getContactById = asyncHandler((req,res)=>{
    res.status(200).json({msg: `Contact get by id ${req.params.id}`})
})

//@ desc Update contact by id
//@ route PUT /api/contacts/:id
//@ access public 
const updateContact = asyncHandler((req,res)=>{
    res.status(200).json({msg: `Update contact with id ${req.params.id}`})
})

//@ desc Delete contact by id
//@ route DELETE /api/contacts/:id
//@ access public 
const deleteContact = asyncHandler((req,res)=>{
    res.status(200).json({msg: `Delete contact with id ${req.params.id}`})
})


module.exports = {getContact,createContact,getContactById,updateContact,deleteContact}