import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies:Movie[] = [
    {
      id: 'one',
      title: 'Avenger 1',
      imgUrl : 'https://images2.alphacoders.com/131/thumb-1920-1315111.jpg',
      rating : 'five'
    },
    {
      id: 'two',
      title: 'Avenger 2',
      imgUrl : 'https://images2.alphacoders.com/131/thumb-1920-1315111.jpg',
      rating : 'five'
    },
    {
      id: 'three',
      title: 'Avenger 3',
      imgUrl : 'https://images2.alphacoders.com/131/thumb-1920-1315111.jpg',
      rating : 'five'
    },
  ]

  constructor() { }

  getAllMovies() {
    return [...this.movies];
  }

  getSelectedMovies(movieId: string) {
    return {...this.movies.find( mv => {
      return mv.id === movieId;
    })
  }
  }
}
