'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _ratings = require('../../../graphql/types/ratings');

var _ratings2 = require('../../../schemas/ratings');

var _ratings3 = _interopRequireDefault(_ratings2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    type: _ratings.RatingType,
    args: {
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var removedRating = _ratings3.default.findOneAndRemove(params.id).exec();
        if (!removedRating) {
            throw new Error('Error removing rating');
        }
        return removedRating;
    }
};