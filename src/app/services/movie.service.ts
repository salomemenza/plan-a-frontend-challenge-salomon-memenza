import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';
import { SearchMovie } from '../models/searchMovie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  getLatestMovie = (): Observable<Movie> => {
    return this.http.get<Movie>(`${environment.baseUrl}/movie/latest?api_key=${environment.apiKey}&language=en-US`)
  }

  searchMovie = (page : Number): Observable<SearchMovie> => {
    return this.http.get<SearchMovie>(`${environment.baseUrl}/search/movie?api_key=${environment.apiKey}&language=en-US&query=a&page=`+page)
  }
}
