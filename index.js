import express from 'express';
import mongoose from 'mongoose';
import graphQLHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import {createToken} from './src/resolvers/create';
import {verifyToken} from './src/resolvers/verify';

import GraphQLSchema from './src/graphql';
import User  from './src/schemas/users';
import payService from './src/payment/apply';

import cors from 'cors';

const app = express();
const port = 3003;


app.use(cors());

mongoose.connect('mongodb://netflix:netflix2018@ds139970.mlab.com:39970/clone-netflix');
const db = mongoose.connection;

db.on('error',() => console.log("Failed to conect to database"))
    .once('open', () => console.log("Connected to the database at port ", port))

const jsonParser = bodyParser.json();

app.use('/login',jsonParser,(req,res) => {
    if (req.method === 'POST') {
        console.log(`request >>> ${req}`)
        createToken(req.body.email, req.body.password)
            .then((token) =>{
                res.status(200).json({ token })
                console.log(`token generado success`)
            })
            .catch((err) =>{
                res.status(401).json({ //no token - invalid credentials
                    message: 'Login failed! Invalid credentials!'
                })
                console.log(`token error`)
            })
    
    }
});

app.use('/register',jsonParser,(req,res) => {
    if (req.method === 'POST') {
        console.log(`request >>> ${req}`)
        let user = new User(req.body)
    
        user.save((err) => {
            if(err) throw err
            res.send("creado usuario"); 
        })
    }
});

app.use('/verifyToken',jsonParser,(req,res) => {
    if (req.method === 'POST') {
        const token = req.headers['authorization']
        verifyToken(token)
            .then(user => {
                res.status(200).json({ user });
            })
            .catch(err => {
                res.status(401).json({ message:err.message });
            })
    }
})

app.use('/payment', jsonParser, (req, res) => {
    if(req.method === 'POST') {
        const token = req.headers['authorization']
        const tokenCard = req.body.tokenCard;
        const amount = req.body.amount;
        console.log(req.body)
        verifyToken(token)
            .then(user => {
                new payService().applyCharge(user, tokenCard, amount)
                    .then(charge => {
                        user.isPremium = true;
                        user.save((err) => {
                            if(err) throw err
                            res.status(200).json(charge);
                        })
                    })
                    .catch(err => {
                        res.status(401).json({ message: err.message })
                    })
            })
            .catch(err => {
                res.status(401).json({ message: err.message })
            })
    }
})

//Middleware auth
app.use('/graphql', (req,res,next) => {

    const token = req.headers['authorization']

    verifyToken(token)
        .then(user => {
            req.user = user
            next()
        })
        .catch(err => {
            console.log(err)
            res.status(401).json({
                message: err.message
            })
        })
});

app.use('/graphql', graphQLHTTP((req,res) => ({
        schema: GraphQLSchema,
        graphiql: true,
        pretty: true,
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



