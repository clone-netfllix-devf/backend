import User from '../../../schemas/users';
import {UserType,UserInputType }from '../../types/users';
import * as graphql from 'graphql';


export default {

    type:UserType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(UserInputType)
        }
    },
    resolve(root,params){
        console.log('llego al mutation de user')
        console.log(`con los parametros ${params.data}`)
        const user  = new User(params.data)
        const newUser = user.save();
        if(!newUser) throw new Error("Problema al crear user")
        return newUser
    }


}