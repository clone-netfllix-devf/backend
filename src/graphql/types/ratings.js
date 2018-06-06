import * as graphql from 'graphql';

import Ratings from '../../schemas/ratings';

export const RatingType = new graphql.GraphQLObjectType({
	name : "Ratings",
	description : "Ratings in database",
	fields :() => ({
		 
			name :{
				type: graphql.GraphQLString
			},
			description : {
				type : graphql.GraphQLString
			},
		}),
});


export const RatingInputType = new graphql.GraphQLInputObjectType({
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

