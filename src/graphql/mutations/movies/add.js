import Movie from '../../../schemas/movies';
import {MovieType,MovieInputType }from '../../types/movies';
import * as graphql from 'graphql';


export default {

    type:MovieType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(MovieInputType)
        }
    },
    resolve(root,params){
        const movie  = new Movie(params.data)
        const newMovie = movie.save();
        if(!newMovie) throw new Error("Problema al crear movie")
        return newMovie
    }


}