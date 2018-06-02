const graphql  = require('graphql');

const Genre = require('../../../schemas/genres');
const GenreType = require('../../types/genres');

const querySingleGenre = {

    type:GenreType,
    args:{
        id:{
            name:ID,
            type:graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const genre = Genre.findbyId(params.id).exec()
        return genre
    }

}

module.exports = querySingleGenre;