const graphql = require('graphql');

const GenreType = require('./genres');
const Genre = require('../../schemas/genres')

const RatingType = require('./ratings');
const Rating = require('../../schemas/ratings')

const MovieType = new graphql.GraphQLObjectType({
    name: 'Movies',
    description: 'Types of Movies',
    fields: () => ({
        _id: {
            type:graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        image: {
            type:graphql.GraphQLString
        },
        name: {
            type:graphql.GraphQLString
        },
        synopsis: {
            type:graphql.GraphQLString
        },
        director: {
            type:graphql.GraphQLString
        },
        year: {
            type:graphql.GraphQLInt
        },
        rank: {
            type:graphql.GraphQLInt
        },
        duration: {
            type:graphql.GraphQLString
        },
        rating: {
            type:RatingType,
            resolve(movie){
                const {rating} = movie
                return Rating.findById(rating).exec()
            }
        },
        genre: {
            type:GenreType,
            resolve(movie){
                const {genre} = movie
                return Genre.findById(genre).exec()
            }
        },
        language: {
            type:graphql.GraphQLString
        },
        premium: {
            type:graphql.GraphQLBoolean
        },
        url: {
            type:graphql.GraphQLString
        }
    })
})

module.exports = MovieType;