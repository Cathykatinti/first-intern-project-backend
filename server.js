//all the packages that i installed
var Express =  require("express");
var mongoose = require('mongoose');
//var bodyParser = require('body-passer')
// var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const routes =require('./routes/ToDoRoute')
// const multer = require("multer")
//creating instance of the express app and let it use the cors
var app= Express();
app.use(cors());

require('dotenv').config();

const PORT = process.env.PORT || 5000;

//connection to the database
app.use(Express.json());
mongoose
.connect(process.env.CONNECTION_STRING)
.then(() => {console.log('Success')})
.catch(err => console.log(err));

app.use(routes)
//making the app listen
app.listen(PORT,()=>{
    
    console.log('Listening on port ' + PORT);
});