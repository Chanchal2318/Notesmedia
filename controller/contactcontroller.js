const Contact = require('../models/Contact');
const mongoose = require('mongoose');
async function addContact(req,res){
    try{
        console.log(req.body);
        let contact = new Contact(req.body);
        await contact.save();
        res.render('thankyou');
        console.log("Data added successfully...");
    }catch(err){
        console.log(err);
    }
}
module.exports = {
    addContact
}