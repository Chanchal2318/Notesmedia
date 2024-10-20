const express = require("express");
const router = express.Router();
const contactcontroller = require('../controller/contactcontroller');
router.use(express.urlencoded({extended : false}));
router.get('/contact',(req,res)=>{
    res.render('contact');
})
router.post('/add/contact',(req,res)=>{
    contactcontroller.addContact(req,res);
})
router.post('/contact/thankyou',(req,res)=>{
    res.render('thankyou');
})
module.exports = router