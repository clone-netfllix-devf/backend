const graphql  = require('graphql');

const Rating = require('../../../schemas/ratings');
const RatingType = require('../../types/ratings');

const querySingleRating = {

    type:RatingType,
    args:{
        id:{
            name:ID,
            type:graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const rating = Rating.findbyId(params.id).exec()
        return rating
    }

}

module.exports = querySingleRating;