import { ActionReducerMap } from "@ngrx/store";
import { MovieState } from '../models/movie.state';
import { movieReducer } from './reducers/movie.reducer';

export interface AppState {
    latestMovie: MovieState,
    movies: MovieState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    latestMovie: movieReducer,
    movies: movieReducer
}