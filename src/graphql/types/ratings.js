import * as graphql from 'graphql';

import Ratings from '../../schemas/ratings';

var RatingType = new graphql.GraphQLObjectType({
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

export default  RatingType;