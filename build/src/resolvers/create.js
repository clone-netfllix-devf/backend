'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _users = require('../schemas/users');

var _users2 = _interopRequireDefault(_users);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Use email as login, use password as password
 * @param {string} email 
 * @param {string} password
 */
var expiresIn = '1d'; // time to live
var secret = 'samplejwtauthgraphql'; // secret key
var tokenPrefix = 'JWT'; // Prefix for HTTP header

var createToken = exports.createToken = function createToken(email, password) {
    if (!email || !password) {
        // no credentials = fail
        return false;
    }
    var user = _users2.default.findOne({ 'email': email }).then(function (user) {

        var compare = new Promise(function (resolve, reject) {
            _bcrypt2.default.compare(password, user.password, function (err, res) {
                if (res) {
                    var payload = {
                        email: user.email,
                        id: user._id
                    };
                    var token = _jsonwebtoken2.default.sign(payload, secret, {
                        expiresIn: expiresIn
                    });

                    resolve(token);
                } else {
                    reject(false);
                }
            });
        });

        return compare;
    }).catch();

    return user;
};