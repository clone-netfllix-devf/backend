import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
	GraphQLObjectType,
	GraphQLInt
  } from 'graphql';

import Ratings from '../../schemas/ratings';

export const RatingType = new GraphQLObjectType({
	name : "Ratings",
	description : "Ratings in database",
	fields :() => ({
		 
			name :{
				type: GraphQLString
			},
			description : {
				type : GraphQLString
			},
			age : {
				type : GraphQLInt,
			  },
		}),
});

export const RatingInputType = new GraphQLInputObjectType({
    name:'RatingInput',
    description:'Insert Rating',
    fields: () => ({
        name:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
		},
		age : {
			type : GraphQLInt,
		  },
    })

});
