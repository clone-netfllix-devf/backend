import * as graphql from 'graphql';

import Users from '../../schemas/users';


export const  UserType = new graphql.GraphQLObjectType({
	name : "Users",
	description : "Users in database",
	fields :() => ({

		_id: {
            type:graphql.GraphQLNonNull(graphql.GraphQLID)
        },
		
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

export const UserInputType = new graphql.GraphQLInputObjectType({
    name: 'AddUsers',
    description: 'Types of Users',
    fields: () => ({
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
    
})

