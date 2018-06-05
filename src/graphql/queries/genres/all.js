import * as  graphql  from 'graphql';

import Genre from '../../../schemas/genres';
import {GenreType} from '../../types/genres';

const queryAllGenres = {

    type:new graphql.GraphQLList(GenreType),
    resolve(){
        const genres = Genre.find().exec()
        if(!genres) throw new Error("Error al traer generos")
        return genres
    }

}

export default queryAllGenres;