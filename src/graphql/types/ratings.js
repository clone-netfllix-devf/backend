import * as graphql from 'graphql';

import Ratings from '../../schemas/ratings';

export const RatingType = new graphql.GraphQLObjectType({
	name : "Ratings",
	description : "Ratings in database",
	fields :() => ({
			_id: {
				type:graphql.GraphQLNonNull(graphql.GraphQLID)
			},
			
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
	            type:graphql.GraphQLString
	        },
	        description:{
	            type:graphql.GraphQLString
			},
			age : {
				type : graphql.GraphQLInt,
			  },
	    })
	
	});

