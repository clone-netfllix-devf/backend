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

    const [prefix, payload] = token.split(' ');

    let user = null
    if (!payload) { //no token in the header
        throw new Error('No token provided')
    }
    if (prefix !== tokenPrefix) { //unexpected prefix or format
        throw new Error('Invalid header format')
    }
    jwt.verify(payload, secret, (err, data) => {
        if (err) { //token is invalid
            throw new Error('Invalid token!')
        } else {

            console.log("EMAIL DEL PAYLOAD",data.email);
            user = User.find({'email':data.email});

                

            
            
        }
    })
    if (!user) { //user does not exist in DB
        throw new Error('User doesn not exisst')
    }
    return user
}