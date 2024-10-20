const express = require("express");
const connection = require("./connection");
const notes = require('./routes/notes');
const notesRouter = require('./routes/notes');
const signup = require('./routes/signup');
const contact = require('./routes/contact');
const review = require('./routes/review');
const path = require('path');
const app = express();
const port = 3000;
connection();
app.use(notes);
app.use(signup);
app.use(contact);
app.use(review);
app.use('/media', express.static('media'));
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));
app.use('/',notesRouter);
app.use('/about',notesRouter);
app.use('/branches',notesRouter);
app.use('/contact',notesRouter);
app.use('/electrical',notesRouter);
app.use('/civil',notesRouter);
app.use('/mechanical',notesRouter);
app.use('/computerscience',notesRouter);
app.use('/signup',notesRouter);
app.use('/login',notesRouter);
app.use('/support',notesRouter);
app.use('/query',notesRouter);
app.use('/firstyear',notesRouter);
app.use('/civil/secondyearCivil',notesRouter);
app.use('/civil/thirdyearCivil',notesRouter);
app.use('/civil/secondyearCivil',notesRouter);
app.use('/computer/thirdyearComputer',notesRouter);
app.use('/computer/fourthyearComputer',notesRouter);
app.use('/computer/fourthyearComputer',notesRouter);
app.use('/mechanical/secondyearMechanical',notesRouter);
app.use('/mechanical/thirdyearMechanical',notesRouter);
app.use('/mechanical/fourthyearMechanical',notesRouter);
app.use('/electrical/secondyearElectrical',notesRouter);
app.use('/electrical/thirdyearElectrical',notesRouter);
app.use('/electrical/secondyearElectrical',notesRouter);
// app.use('/media', express.static(path.join(__dirname, 'media')));


app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server is listening on ${port}`);
    }

})