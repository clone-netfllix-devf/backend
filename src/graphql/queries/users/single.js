const graphql  = require('graphql');

const User = require('../../../schemas/users');
const UserType = require('../../types/users');

const querySingleUser = {

    type:UserType,
    args:{
        id:{
            name:ID,
            type:graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const user = User.findById(params.id).exec()
        return user
    }

}

module.exports = querySingleUser;