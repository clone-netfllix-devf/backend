import {
    GraphQLList
    } from 'graphql';

import Genre from '../../../schemas/genres';
import {GenreType} from '../../types/genres';

export default  {

    type:new GraphQLList(GenreType),
    resolve(){
        const genres = Genre.find().exec()
        if(!genres) throw new Error("Error al traer generos")
        return genres
    }

}

