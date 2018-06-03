const graphql = require('graphql');


const GenreType = new graphql.GraphQLObjectType({
    name:"Genres",
    description:"Types of Genres",
    fields: () => ({

        _id: {
            type:graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        name:{
            type:graphql.GraphQLString
        },
        description:{
            type:graphql.GraphQLString
        }

    })
})

module.exports =  GenreType;