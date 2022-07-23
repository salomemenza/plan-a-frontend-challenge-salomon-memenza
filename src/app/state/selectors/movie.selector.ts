import { createSelector } from '@ngrx/store';
import { MovieState } from 'src/app/models/movie.state';
import { AppState } from '../app.state';

export const selectLastMovieFeature = (state: AppState) => state.latestMovie
export const selectMoviesFeature = (state: AppState) => state.movies

export const selectLastMovieItem = createSelector(
    selectLastMovieFeature,
    (state: MovieState) => state.latestMovie
);

export const selectLoading = createSelector(
    selectLastMovieFeature,
    (state: MovieState) => state.loading
);

export const selectMovies = createSelector(
    selectMoviesFeature,
    (state: MovieState) => state.movies
);