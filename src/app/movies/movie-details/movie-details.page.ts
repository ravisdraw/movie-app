import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  loadedMovie: any;

  constructor(private activatedRoute : ActivatedRoute, private movieService : MoviesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      
      if(!paramMap.has('movieId')) {
        return;
      }
      const movieId = paramMap.get('movieId');
      if(movieId) {
        this.loadedMovie = this.movieService.getSelectedMovies(movieId);
      }
    })
    console.log(this.loadedMovie);
  }

}
