import Genres from './genres';
import Movies from './movies';
import Users from './users';

export default {
    ...Genres,
	   ...Users,
    ...Movies,
}