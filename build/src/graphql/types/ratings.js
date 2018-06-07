'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RatingInputType = exports.RatingType = undefined;

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _ratings = require('../../schemas/ratings');

var _ratings2 = _interopRequireDefault(_ratings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RatingType = exports.RatingType = new graphql.GraphQLObjectType({
	name: "Ratings",
	description: "Ratings in database",
	fields: function fields() {
		return {
			_id: {
				type: graphql.GraphQLNonNull(graphql.GraphQLID)
			},

			name: {
				type: graphql.GraphQLString
			},
			description: {
				type: graphql.GraphQLString
			}
		};
	}
});

var RatingInputType = exports.RatingInputType = new graphql.GraphQLInputObjectType({
	name: 'RatingInput',
	description: 'Insert Rating',
	fields: function fields() {
		return {
			name: {
				type: graphql.GraphQLString
			},
			description: {
				type: graphql.GraphQLString
			},
			age: {
				type: graphql.GraphQLInt
			}
		};
	}

});