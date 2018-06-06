import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLNonNull
  } from 'graphql';


export const GenreType = new GraphQLObjectType({
    name:"Genres",
    description:"Types of Genres",
    fields: () => ({

        _id: {
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
        }

    })
})

export const GenreInputType = new GraphQLInputObjectType({
    name:'GenreInput',
    description:'Insert Genre',
    fields: () => ({
        name:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
        }
    })

});

