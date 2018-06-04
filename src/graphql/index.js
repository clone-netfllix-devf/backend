import * as  graphql from 'graphql';
import queries from './queries';

export default new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: queries
    })
});