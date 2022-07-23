import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { SearchMovie } from 'src/app/models/searchMovie.model';
import { selectMovies } from 'src/app/state/selectors/movie.selector';

@Component({
  selector: 'app-movie-acordion',
  templateUrl: './movie-acordion.component.html',
  styleUrls: ['./movie-acordion.component.css']
})
export class MovieAcordionComponent implements OnInit {
  public movies$: Observable<SearchMovie>;
  public data: Movie[] = [];

  constructor(
    private store: Store<any>
  ) {
    this.movies$ = new Observable();
  }

  ngOnInit(): void {
    this.movies$ = this.store.select(selectMovies);
    this.movies$.subscribe((resp: any) => {
      if(resp){
        this.data = this.data.concat(resp.results);
      }
    });
  }

}
