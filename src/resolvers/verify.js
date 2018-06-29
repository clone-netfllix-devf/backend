import User from '../schemas/users';
import jwt from 'jsonwebtoken';
import find from 'lodash/find';

/**
 * @returns {Object}- current user object
 * @param {string} token header
 */

const expiresIn = '3h' // time to live
const secret = 'samplejwtauthgraphql' // secret key
const tokenPrefix = 'JWT' // Prefix for HTTP header

export const verifyToken = (token) => {
    console.log(`token ${token}`)
    return new Promise((resolve, reject) => {
        const [prefix, payload] = token.split(' ');

        if(!payload) return reject('No token provided');
        if(prefix !== tokenPrefix) return reject('Invalid header format');

        jwt.verify(payload, secret, (err, data) => {
            if(err) {
                return reject(err);
            }
            User.findOne({ '_id': data.id }).exec()
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                })
        })
    })


    // if (!payload) { //no token in the header
    //     throw new Error('No token provided')
    // }
    // if (prefix !== tokenPrefix) { //unexpected prefix or format
    //     throw new Error('Invalid header format')
    // }
    // jwt.verify(payload, secret, (err, data) => {
    //     if (err) { //token is invalid
    //         throw new Error('Invalid token!')
    //     } else {
    //         console.log(data);
    //         user = User.findOne({'_id':data.id}).exec();
    //     }
    // })
    // if (!user) { //user does not exist in DB
    //     throw new Error('User doesn not exisst')
    // }
}