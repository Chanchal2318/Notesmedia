const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
    Name : {type:String , required:true},
    email : {type:String , required:true},
    message : {type:String , required:true}
})

module.exports = mongoose.model('Contact',ContactSchema);