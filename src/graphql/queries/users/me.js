import User from '../../../schemas/users';
import {UserType} from '../../types/users';
import * as graphql from 'graphql';


export default {

    type:UserType,
    resolve(root, params, context){
        return context.user
    }



}