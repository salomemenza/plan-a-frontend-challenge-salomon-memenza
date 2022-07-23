import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MovieService } from "src/app/services/movie.service";

@Injectable()
export class MovieEffect {

    loadLatestMovie$ = createEffect(() => this.actions$.pipe(
        ofType('[LATEST MOVIE] load latest movie'),
        mergeMap(() => this.movieService.getLatestMovie().pipe(
            map(movie => ({ type: '[LATEST MOVIE] loaded latest movie', movie })),
            catchError(() => EMPTY)
        ))
    ));

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType('[MOVIES] load movies'),
        mergeMap(({page}) => this.movieService.searchMovie(page).pipe(
            map(searchMovie => ({ type: '[MOVIES] loaded movies', searchMovie })),
            catchError(() => EMPTY)
        ))
    ));

    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ){}
}