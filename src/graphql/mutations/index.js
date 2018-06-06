import Genres from './genres';
import Movies from './movies';
import Users from './users';
import Ratings from './ratings';

export default {
    ...Genres,
	...Users,
    ...Movies,
    ...Ratings
}