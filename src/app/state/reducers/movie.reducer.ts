import { createReducer, on } from "@ngrx/store";
import { MovieState } from '../../models/movie.state';

import { loadedLatestMovie, loadedMovies, loadLatestMovie, loadMovies } from '../actions/movie.actions';

export const initialState: MovieState = {
    loading : false,
    latestMovie : null,
    movies: null
}

export const movieReducer = createReducer(
    initialState,
    on(loadLatestMovie,(state) => {
        return {...state, loading: true}
    }),
    on(loadedLatestMovie, (state, {movie}) => {
        return {...state, loading: false, latestMovie: movie}
    }),
    on(loadMovies,(state) => {
        return {...state, loading: true}
    }),
    on(loadedMovies, (state, {searchMovie}) => {
        return {...state, loading: false, movies: searchMovie}
    }),
);