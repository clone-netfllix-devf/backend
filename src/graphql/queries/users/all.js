const graphql  = require('graphql');

const Genre = require('../../../schemas/users');
const GenreType = require('../../types/users');

const queryAllUsers = {

    type:new graphql.GraphQLList(UserType),
    resolve(){
        const users = User.find().exec()
        if(!users) throw new Error("Error al traer usuarios")
        return users
    }

}

module.exports = queryAllUsers;