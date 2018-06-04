import * as graphql from 'graphql';

import Users from '../../schemas/users';

var UserType = new graphql.GraphQLObjectType({
	name : "Users",
	description : "Users in database",
	fields :() => ({
		
			name :{
				type: graphql.GraphQLString
			},
			lastName : {
				type : graphql.GraphQLString
			},
			isPremium : {
				type : graphql.GraphQLBoolean
			},
			address : {
				type : graphql.GraphQLString
			},
			ccHash : {
				type : graphql.GraphQLString
			},
			email : {
				type : graphql.GraphQLString
			},
			password : {
				type : graphql.GraphQLString
			},
			birthDate : {
				type : graphql.GraphQLString
			},
		}),
	
});

export default  UserType;
