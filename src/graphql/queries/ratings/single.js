import {
    GraphQLID,
    GraphQLNonNull

} from 'graphql';

import Rating from '../../../schemas/ratings';
import {RatingType} from '../../types/ratings';

export default {

    type:RatingType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){  
        return Rating.findbyId(params.id).exec()
    }

}