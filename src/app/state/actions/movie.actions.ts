import { createAction, props } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { SearchMovie } from '../../models/searchMovie.model';

export const loadLatestMovie = createAction(
    '[LATEST MOVIE] load latest movie'
);

export const loadedLatestMovie = createAction(
    '[LATEST MOVIE] loaded latest movie',
    props<{ movie : Movie}>()
);

export const loadMovies = createAction(
    '[MOVIES] load movies', (page: number) => ({page})
);

export const loadedMovies = createAction(
    '[MOVIES] loaded movies',
    props<{ searchMovie : SearchMovie}>()
);