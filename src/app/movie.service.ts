import { Injectable } from '@angular/core';
import { Movie } from './app.component';

//singleton
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Array<Movie> = [{
    src: 'https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg',
    name: 'Love Today',
    rating: 9.1,
    summary: 'Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan in his second directorial venture after Comali, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment.[3] Archana Kalpathi is the creative producer for the film. The film stars Pradeep Ranganathan himself (in his acting debut) and Ivana (in her first lead role).'
  },
  {
    src: 'https://mellowplex.s3.amazonaws.com/uploads/item/asset/28986/b.jpg',
    name: 'Beast',
    rating: 9.1,
    summary: 'Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan in his second directorial venture after Comali, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment.[3] Archana Kalpat is the creative producer for the film. The film stars Pradeep Ranganathan him (in his acting debut) and Ivana (in her first lead role).'
  }, {
    src: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Ponniyin_Selvan_I.jpg',
    name: 'PS1',
    rating: 9.1,
    summary: 'Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan in his second directorial venture after Comali, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment.[3] Archana Kalpathi is the creative producer for the film. The film stars Pradeep Ranganathan himself (in his acting debut) and Ivana (in her first lead role).'
  }, {
    src: 'https://m.media-amazon.com/images/M/MV5BYjNlOWQ2YzEtYTc5Yy00MjcyLTg2YTgtMGVmM2YzZTk4N2JjXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg',
    name: 'Sardar',
    rating: 9.1,
    summary: 'Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan in his second directorial venture after Comali, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment.[3] Archana Kalpathi is the creative producer for the film. The film stars Pradeep Ranganathan himself (in his acting debut) and Ivana (in her first lead role).'
  }
  ];

  constructor() { }

  //encapsulation
  getMovies() {
    return this.movies;
  }

  setMovies(newMovie: Movie) {
    this.movies.push(newMovie);

  }


}
