// const express = require("express");
// const connection = require("./connection");
// const notes = require('./routes/notes');
// const notesRouter = require('./routes/notes');
// const signup = require('./routes/signup');
// const contact = require('./routes/contact');
// const review = require('./routes/review');
// const path = require('path');
// const app = express();
// const port = 3000;
// connection();
// app.use('/media', express.static('media'));
// app.use(notes);
// app.use(signup);
// app.use(contact);
// app.use(review);
// app.set('view engine','ejs');
// app.set('views',path.resolve('./views'));
// app.use('/',notesRouter);
// app.use('/about',notesRouter);
// app.use('/branches',notesRouter);
// app.use('/contact',notesRouter);
// app.use('/electrical',notesRouter);
// app.use('/civil',notesRouter);
// app.use('/mechanical',notesRouter);
// app.use('/computerscience',notesRouter);
// app.use('/signup',notesRouter);
// app.use('/login',notesRouter);
// app.use('/support',notesRouter);
// app.use('/query',notesRouter);
// app.use('/firstyear',notesRouter);
// app.use('/civil/secondyearCivil',notesRouter);
// app.use('/civil/thirdyearCivil',notesRouter);
// app.use('/civil/secondyearCivil',notesRouter);
// app.use('/computer/thirdyearComputer',notesRouter);
// app.use('/computer/fourthyearComputer',notesRouter);
// app.use('/computer/fourthyearComputer',notesRouter);
// app.use('/mechanical/secondyearMechanical',notesRouter);
// app.use('/mechanical/thirdyearMechanical',notesRouter);
// app.use('/mechanical/fourthyearMechanical',notesRouter);
// app.use('/electrical/secondyearElectrical',notesRouter);
// app.use('/electrical/thirdyearElectrical',notesRouter);
// app.use('/electrical/secondyearElectrical',notesRouter);
// // app.use('/media', express.static(path.join(__dirname, 'media')));


// app.listen(port,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(`Server is listening on ${port}`);
//     }

// })



const express = require("express");
const connection = require("./connection");
const notesRouter = require('./routes/notes');
const signupRouter = require('./routes/signup');
const contactRouter = require('./routes/contact');
const path = require('path');

const app = express();
const port = 3000;

// Establish database connection
connection();

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Serve static files
app.use('/media', express.static(path.join(__dirname, 'media')));

// Use routers
app.use('/', notesRouter);
app.use('/signup', signupRouter);
app.use('/contact', contactRouter);

// Add other routes from notesRouter as needed
const additionalRoutes = [
    '/about',
    '/branches',
    '/electrical',
    '/civil',
    '/mechanical',
    '/computerscience',
    '/login',
    '/support',
    '/query',
    '/firstyear',
    '/civil/secondyearCivil',
    '/civil/thirdyearCivil',
    '/computer/thirdyearComputer',
    '/computer/fourthyearComputer',
    '/mechanical/secondyearMechanical',
    '/mechanical/thirdyearMechanical',
    '/mechanical/fourthyearMechanical',
    '/electrical/secondyearElectrical',
    '/electrical/thirdyearElectrical',
];

// Assuming notesRouter can handle these routes,
// you can create a function in notesRouter to handle these additional routes or define them here.

additionalRoutes.forEach(route => {
    app.use(route, notesRouter);
});

// Start the server
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is listening on ${port}`);
    }
});
