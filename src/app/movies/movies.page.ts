import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies:Movie[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movies = this.movieService.getAllMovies()
  }

}
