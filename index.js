import express from 'express';
import mongoose from 'mongoose';
import graphQLHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import {createToken} from './src/resolvers/create';
import {verifyToken} from './src/resolvers/verify';

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
    if (req.method === 'POST') {
        const token = createToken(req.body.email, req.body.password)
        if (token) { //send successful token
            res.status(200).json({ token })
        } else {
            res.status(403).json({ //no token - invalid credentials
                message: 'Login failed! Invalid credentials!'
            })
        }
    }
});

app.use('/verifyToken',jsonParser,(req,res) => {
    if (req.method === 'POST') {
        try {
            const token = req.headers['Authorization']
            const user = verifyToken(token)
            res.status(200).json({ user })
        } catch (e) {
            console.log(e.message)
            res.status(401).json({ //unauthorized token
                message: e.message
            })
        }
    }
})  

//Middleware auth
app.use('/graphql', (req,res,next) => {
    const token = req.headers['authorization']
    try {
        req.user = verifyToken(token)
        next()
    } catch (e) {
        res.status(401).json({ //unauthorized token
            message: e.message
        })
    }
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



