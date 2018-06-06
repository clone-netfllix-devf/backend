import genres from './genres';
import raitings from './ratings';
import users from './users';
import movies from './movies';


export default {
    ...genres,
    ...raitings,
    ...users,
    ...movies,
}