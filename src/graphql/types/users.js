var _graphql = require('graphql');

var _Users = require('../../schemas/usersdb');

var UserType = new _graphql.GraphQLObjectType({
	name : "Users",
	description : "Users in database",
	fields : function fields(){
		return {
			name :{
				type: _graphql.GraphQLString
			},
			lastName : {
				type : _graphql.GraphQLString
			},
			isPremium : {
				type : _graphql.GraphQLScalarType
			},
			address : {
				type : _graphql.GraphQLString
			},
			ccHash : {
				type : _graphql.GraphQLString
			},
			email : {
				type : _graphql.GraphQLString
			},
			password : {
				type : _graphql.GraphQLString
			},
			birthDate : {
				type : _graphql.GraphQLDate
			},
		};
	}
});

module.exports =  UserType;
