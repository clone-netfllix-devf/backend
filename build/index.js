'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _create = require('./src/resolvers/create');

var _verify = require('./src/resolvers/verify');

var _graphql = require('./src/graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _users = require('./src/schemas/users');

var _users2 = _interopRequireDefault(_users);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.use((0, _cors2.default)());

_mongoose2.default.connect('mongodb://netflix:netflix2018@ds139970.mlab.com:39970/clone-netflix');
var db = _mongoose2.default.connection;

db.on('error', function () {
    return console.log("Failed to conect to database");
}).once('open', function () {
    return console.log("Connected to the database");
});

var jsonParser = _bodyParser2.default.json();

app.use('/login', jsonParser, function (req, res) {
    if (req.method === 'POST') {
        var token = (0, _create.createToken)(req.body.email, req.body.password).then(function (token) {
            res.status(200).json({ token: token });
        }).catch(function (err) {
            res.status(403).json({ //no token - invalid credentials
                message: 'Login failed! Invalid credentials!'
            });
        });
    }
});

app.use('/verifyToken', jsonParser, function (req, res) {
    if (req.method === 'POST') {
        try {
            var token = req.headers['Authorization'];
            var user = (0, _verify.verifyToken)(token);
            res.status(200).json({ user: user });
        } catch (e) {
            console.log(e.message);
            res.status(401).json({ //unauthorized token
                message: e.message
            });
        }
    }
});

//Middleware auth
app.use('/graphql', function (req, res, next) {

    var token = req.headers['authorization'];
    try {
        req.user = (0, _verify.verifyToken)(token);
        next();
    } catch (e) {
        res.status(401).json({ //unauthorized token
            message: e.message
        });
    }
});

app.use('/graphql', (0, _expressGraphql2.default)(function (req, res) {
    return {
        schema: _graphql2.default,
        graphiql: true,
        pretty: true,
        context: {
            user: req.user
        }
    };
}));

app.get('/', function (req, res) {
    res.send("Hello World");
});

app.get('/users', function (req, res) {
    var user = new _users2.default({
        "name": "PRUEBON",
        "lastname": "prueba",
        "email": "prueba@gmail.com",
        "password": "passss"
    });

    user.save(function (err) {
        if (err) throw err;
        res.send("creado usuario");
    });
});

//get user list
app.get('/userlist', function (req, res) {
    _users2.default.find({}).then(function (users) {
        res.send(users);
    });
});

app.listen(port, function () {
    console.log("Server Works");
});