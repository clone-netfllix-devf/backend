import jwt from 'jsonwebtoken';
import User from '../schemas/users';
import find from 'lodash/find';

import bcrypt from 'bcrypt';
/**
 * Use email as login, use password as password
 * @param {string} email 
 * @param {string} password
 */
const expiresIn = '2d' // time to live
const secret = 'samplejwtauthgraphql' // secret key
const tokenPrefix = 'JWT' // Prefix for HTTP header

 export const createToken = (email, password) => {
    return new Promise((resolve, reject) => {
        if(!email || !password) {
            return reject(false)
        }
        User.findOne({ 'email': email })
            .then((user) => {
                bcrypt.compare(password, user.password, function(err, res) {
                    if(res) {
                        const payload = {
                            email: user.mail,
                            id: user._id
                        }
                        const token = jwt.sign(payload, secret, {
                            expiresIn
                        })
                        return resolve(token)
                    } else {
                        return reject(err)
                    }
                })
            })
            .catch(err => {
                return reject(err)
            });
    });

    // if (!email || !password) { // no credentials = fail
    //     return false
    // }
    // const user = User.findOne({'email':email }).then((user) =>{
  
    //     const compare = new Promise((resolve,reject)=>{
    //         bcrypt.compare(password, user.password, function(err, res) {
    //             if(res){
    //                 const payload = {
    //                     email: user.email,
    //                     id: user._id
    //                 }
    //                 const token = jwt.sign(payload, secret, {
    //                     expiresIn
    //                 })

    //                 resolve(token)
    //             }
    //             else{
    //                 reject(false)
    //             }
    //          });
    //     })

    //     return compare;

    // }).catch()

    // return user
};