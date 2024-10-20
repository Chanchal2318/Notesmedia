const Review = require('../models/Review');
const mongoose = require('mongoose');
async function addReview(req,res){
    try{
        console.log(req.body);
        let review = new Review(req.body);
        await contact.save();
        // res.render('thankyou');
        console.log("Data added successfully...");
    }catch(err){
        console.log(err);
    }
}
module.exports = {
    addReview
}