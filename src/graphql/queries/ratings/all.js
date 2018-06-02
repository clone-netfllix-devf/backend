const graphql  = require('graphql');

const Rating = require('../../../schemas/ratings');
const RatingType = require('../../types/ratings');

const queryAllRatings = {

    type:new graphql.GraphQLList(RatingType),
    resolve(){
        const ratings = Rating.find().exec()
        if(!ratings) throw new Error("Error al traer ratings")
        return ratings
    }

}

module.exports = queryAllRatings;