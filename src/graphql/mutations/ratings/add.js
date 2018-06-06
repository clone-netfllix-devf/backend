import {GraphQLNonNull} from 'graphql';

import { RatingType, RatingInputType } from '../../../graphql/types/ratings';
import RatingSchema  from '../../../schemas/ratings';

export default {
    type: RatingType,
    args: {
        data:{
            name:'data',
            type: new GraphQLNonNull(RatingInputType)
        }
    },
    resolve(root, params){
        const Rating = new RatingSchema(params.data);
        const newRating = Rating.save();
        if(!newRating){
            throw  new Error ('Error adding Rating');
        }
        return newRating
    }
}