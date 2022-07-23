import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { loadLatestMovie } from "src/app/state/actions/movie.actions";
import { selectLastMovieItem, selectLoading } from "src/app/state/selectors/movie.selector";
import { Movie } from '../../models/movie.model';

@Component({
    selector: 'app-latest-movie',
    templateUrl: './latest-movie.page.html',
    styleUrls: ['./latest-movie.page.scss'],
    })
export class LatestMoviePage implements OnInit {
    public loading$: Observable<boolean> = new Observable();
    public latestMovie$: Observable<Movie> = new Observable();;

    constructor(
        private store: Store<any>
    ){
    }

    ngOnInit(){
        this.loading$ = this.store.select(selectLoading);
        this.latestMovie$ = this.store.select(selectLastMovieItem);

        this.store.dispatch(loadLatestMovie());
    }
}