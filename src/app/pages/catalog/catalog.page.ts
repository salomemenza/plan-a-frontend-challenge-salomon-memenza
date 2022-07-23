import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadMovies } from 'src/app/state/actions/movie.actions';
import { Movie } from '../../models/movie.model';
import { SearchMovie } from '../../models/searchMovie.model';
import { Observable } from 'rxjs';
import { selectMovies } from 'src/app/state/selectors/movie.selector';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {
  public page: number = 1;
  public event: any;

  public movies$: Observable<SearchMovie>;

  constructor(
    private store: Store<any>
  ) {
    this.movies$ = new Observable();
  }

  ngOnInit() {
    this.movies$ = this.store.select(selectMovies);
    this.movies$.subscribe((resp: any) => {
      if(resp){
        if (this.page !== resp.total_pages) {
          this.page++;
        } else {
          if (this.event) this.event.target.disabled = true;
        }

        if (this.event) this.event.target.complete();
      }
    });

    this.loadMovies();
  }

  loadMovies(event = null) {
    this.event = event;
    this.store.dispatch(loadMovies(this.page));
  }
}
