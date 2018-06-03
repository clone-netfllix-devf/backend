'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _mutations = require('./mutations');


var _querys = require('./querys');


module.exports = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
        name: 'Query',
        fields: _querys.default
    })
});