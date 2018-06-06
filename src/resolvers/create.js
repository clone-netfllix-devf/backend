import jwt from 'jsonwebtoken';
import User from '../schemas/users';
import find from 'lodash/find';

import bcrypt from 'bcrypt';
/**
 * Use email as login, use password as password
 * @param {string} email 
 * @param {string} password
 */
const expiresIn = '3h' // time to live
const secret = 'samplejwtauthgraphql' // secret key
const tokenPrefix = 'JWT' // Prefix for HTTP header

 export const createToken = (email, password) => {
    if (!email || !password) { // no credentials = fail
        return false
    }
    console.log("email",email);
    console.log("pass",password);
    // const user = find(Users,
    //     (user) => {
    //         return user.email === email.toLowerCase()
    //             && user.last_name.toLowerCase() === password
    //     }
    // );ername
    const user = User.findOne({'email':email }, function(err, user) {
        if (err) {

            console.log('Signup error');
            return done(err);
        }
        console.log(user,"userpass");
        console.log("LETS",user.password);
        console.log("LETS",user.email);
        bcrypt.compare(password, user.password, function(err, res) {
            console.log("hola",user);
            console.log(password,"pass");
            console.log(res,"reseee");


           if(res){
               console.log(res);
            const payload = {
                email: user.email,
                password: res.password,
            }
            const token = jwt.sign(payload, secret, {
                expiresIn
            })
            console.log(token);
            return token
               
           }
           if(err){
            console.log(err,"err");
        }
           else{
               return false;
           }
           
        });

       
   
    })};