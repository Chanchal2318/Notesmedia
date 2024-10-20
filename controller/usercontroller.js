const User = require('../models/Signup');
const mongoose = require('mongoose');
async function addUser(req,res){
    try{
        console.log(req.body);
        let user = new User(req.body);
        await user.save();
        res.render('home');
        console.log("Data added successfully...");
    }catch(err){
        console.log(err);
    }
}
module.exports = {
    addUser
}