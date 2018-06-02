const graphql = require('graphql');

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
        clasification: {
            type:graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        genre: {
            type:graphql.GraphQLNonNull(graphql.GraphQLID)
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