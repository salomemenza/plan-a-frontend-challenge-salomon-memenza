import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() data: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
