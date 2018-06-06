import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import { RatingType, RatingInputType } from '../../../graphql/types/ratings';
import RatingSchema from '../../../schemas/ratings';

export default {
    type: RatingType,
    args: {
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(RatingInputType)
        }
    },
    resolve(root,params){
        return RatingSchema.findByIdAndUpdate(params.id,{$set:{...params.data}})
            .then(data => RatingSchema.findById(data.id).exec())
            .catch(err => new Error ('Couldnt upddate rating data',err))
    }
};