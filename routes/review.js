const express = require("express");
const router = express.Router();
const reviewcontroller = require('../controller/reviewcontroller');
router.use(express.urlencoded({extended : false}));
router.get('/review',(req,res)=>{
    res.render('review');
})
module.exports = router