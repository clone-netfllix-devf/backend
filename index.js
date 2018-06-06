import express from 'express';
import  mongoose from 'mongoose';
import graphQLHTTP from 'express-graphql';

import schema from './src/graphql';
import User  from './src/schemas/users';
import Rating from './src/schemas/ratings';

const app = express();
const port = process.env.PORT || 3000

mongoose.connect('mongodb://netflix:netflix2018@ds139970.mlab.com:39970/clone-netflix');
const db = mongoose.connection;

db.on('error',() => console.log("Failed to conect to database"))
    .once('open', () => console.log("Connected to the database"))

app.use('/graphql', graphQLHTTP(() => ({
        schema,
        graphiql:true,
        pretty:true
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

app.get('/addrating',(req,res) => {
    var rating = new Rating({
        "name":"PG-13",
        "description": "TEST",
        "age":13
    })

    rating.save((err) => {
        if(err) throw err
        res.send("creado rating"); 
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



