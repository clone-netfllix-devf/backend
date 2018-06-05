import {
    GraphQLID,
    GraphQLNonNull

} from 'graphql';

import  User from '../../../schemas/users';
import  {UserType} from '../../types/users';

export default {

    type:UserType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const user = User.findById(params.id).exec()
        return user
    }

}

