const graphql  = require('graphql');

const Genre = require('../../../schemas/genres');
const GenreType = require('../../types/genres');

const queryAllGenres = {

    type:new graphql.GraphQLList(GenreType),
    resolve(){
        const genres = Genre.find().exec()
        if(!genres) throw new Error("Error al traer generos")
        return genres
    }

}

module.exports = queryAllGenres;