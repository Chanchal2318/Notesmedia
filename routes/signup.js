const express = require("express");
const router = express.Router();
const usercontroller = require('../controller/usercontroller');
router.use(express.urlencoded({extended : false}));
router.post('/add/user',(req,res)=>{
    usercontroller.addUser(req,res);
})
module.exports = router