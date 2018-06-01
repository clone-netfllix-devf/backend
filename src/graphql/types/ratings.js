var _graphql = require('graphql');

var _Ratings = require('../../schemas/Ratings');

var RatingType = new _graphql.GraphQLObjectType({
	name : "Ratings",
	description : "Ratings in database",
	fields : function fields(){
		return {
			name :{
				type: _graphql.GraphQLString
			},
			description : {
				type : _graphql.GraphQLString
			},
		};
	}
});

module.exports =  RatingType;