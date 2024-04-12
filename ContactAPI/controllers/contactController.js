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
    
    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404)
        throw new Error("Content not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updatedContact)
})

//@ desc Delete contact by id
//@ route DELETE /api/contacts/:id
//@ access public 
const deleteContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404)
        throw new Error("Content not found")
    }
    await Contact.findByIdAndDelete(req.params.id)
    res.status(200).json(contact)
})


module.exports = {getContact,createContact,getContactById,updateContact,deleteContact}