import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
	GraphQLObjectType,
	GraphQLBoolean
  } from 'graphql';

import Users from '../../schemas/users';

export const UserType = new GraphQLObjectType({
	name : "Users",
	description : "Users in database",
	fields :() => ({
		
			name :{
				type: GraphQLString
			},
			lastName : {
				type : GraphQLString
			},
			isPremium : {
				type : GraphQLBoolean
			},
			address : {
				type : GraphQLString
			},
			ccHash : {
				type : GraphQLString
			},
			email : {
				type : GraphQLString
			},
			password : {
				type : GraphQLString
			},
			birthDate : {
				type : GraphQLString
			},
		}),
	
});

export const UserInputType = new GraphQLInputObjectType({
    name:'UserInput',
    description:'Insert User',
    fields: () => ({
		name :{
			type: GraphQLString
		},
		lastName : {
			type : GraphQLString
		},
		isPremium : {
			type : GraphQLBoolean
		},
		address : {
			type : GraphQLString
		},
		ccHash : {
			type : GraphQLString
		},
		email : {
			type : GraphQLString
		},
		password : {
			type : GraphQLString
		},
		birthDate : {
			type : GraphQLString
		},
	}),

});

