import { Movie } from './movie.model';
import { SearchMovie } from './searchMovie.model';

export interface MovieState {
    loading: boolean,
    latestMovie: Readonly<Movie>
    movies: Readonly<SearchMovie>
}