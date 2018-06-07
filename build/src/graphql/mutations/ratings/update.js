'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_ratings.RatingInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _ratings3.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (data) {
            return _ratings3.default.findById(data.id).exec();
        }).catch(function (err) {
            return new Error('Couldnt upddate rating data', err);
        });
    }
};