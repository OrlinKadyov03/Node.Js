const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")
//@ desc Get all contacts
//@ route GET /api/contacts
//@ access public 
const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.find()
    res.status(200).json(contact)
})
//@ desc Create contact
//@ route POST /api/contacts
//@ access public 
const createContact = asyncHandler(async (req,res)=>{
    const {name,email,phone} = req.body
    console.log("The request body is :",req.body)
    if(!name || !email || !phone)
    {
       res.status(400)
       throw new Error("Not filled correctly")
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    })

    res.status(201).json(contact)
 

})

//@ desc Get contact by id
//@ route GET /api/contacts/:id
//@ access public 
const getContactById = asyncHandler(async(req,res)=>{
 

    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404)
        throw new Error("Content not found")
    }
    res.status(200).json(contact)
})

//@ desc Update contact by id
//@ route PUT /api/contacts/:id
//@ access public 
const updateContact = asyncHandler(async(req,res)=>{
    res.status(200).json({msg: `Update contact with id ${req.params.id}`})
})

//@ desc Delete contact by id
//@ route DELETE /api/contacts/:id
//@ access public 
const deleteContact = asyncHandler((req,res)=>{
    res.status(200).json({msg: `Delete contact with id ${req.params.id}`})
})


module.exports = {getContact,createContact,getContactById,updateContact,deleteContact}