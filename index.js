var express = require('express');
var mongoose = require('mongoose');

var User  = require('./src/schemas/usersdb');

const app = express();
const port = process.env.PORT || 3000

mongoose.connect('mongodb://netflix:netflix2018@ds139970.mlab.com:39970/clone-netflix');
const db = mongoose.connection;

db.on('error',() => console.log("Failed to conect to database"))
    .once('open', () => console.log("Connected to the database"))




app.get('/', (req,res) => {
    res.send("Hello World");
})

app.get('/users',(req,res) => {
 var user = new User({
     "name":"prueba",
     "lastname":"prueba",
     "email":"prueba@gmail.com",
     "password":"password"
 })

user.save((err) => {
    if(err) throw err
    res.send("creado usuario"); 
})

})

app.listen(port, () => {
    console.log("Server Works");

})



