const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let NotesSchema = new Schema({
    subjectName : {type:String , required:true},
    chapter : {type:String , required:true}
})

module.exports = mongoose.model('Notes',NotesSchema);