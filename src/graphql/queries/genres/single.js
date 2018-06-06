import {
    GraphQLID,
    GraphQLNonNull

} from 'graphql';

import Genre from '../../../schemas/genres';
import {GenreType} from '../../types/genres';

export default  {
    type:GenreType,
    args:{
        id:{
            name:'ID',
            type:new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        return Genre.findById(params.id).exec();
    }

}