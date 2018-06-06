import express from 'express';
import  mongoose from 'mongoose';
import graphQLHTTP from 'express-graphql';
import bodyParser from 'body-parser';

import schema from './src/graphql';
import User  from './src/schemas/users';

const app = express();
const port = process.env.PORT || 3000

mongoose.connect('mongodb://netflix:netflix2018@ds139970.mlab.com:39970/clone-netflix');
const db = mongoose.connection;

db.on('error',() => console.log("Failed to conect to database"))
    .once('open', () => console.log("Connected to the database"))

const jsonParser = bodyParser.json();

app.use('/login',jsonParser,(req,res) => {

})    

app.use('/verifyToken',jsonParser,(req,res) => {

})  

//Middleware auth
app.use('/graphql', (req,res,next) => {
       
});

app.use('/graphql', graphQLHTTP((req,res) => ({
        schema,
        graphiql:true,
        pretty:true,
        context:{
            user:req.user
        }
})))


app.get('/', (req,res) => {
    res.send("Hello World");
})

app.get('/users',(req,res) => {
    var user = new User({
        "name":"PRUEBON",
        "lastname":"prueba",
        "email":"prueba@gmail.com",
        "password":"passss"
    })

    user.save((err) => {
        if(err) throw err
        res.send("creado usuario"); 
    })

})

//get user list
app.get('/userlist' , function (req , res) {
 User.find({}).then(function (users) {
 res.send(users);
 });
});

app.listen(port, () => {
    console.log("Server Works");

})



