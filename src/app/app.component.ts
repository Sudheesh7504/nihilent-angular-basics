import { Component, Input } from '@angular/core';

//named import
type Movie = {
  id: string;
  poster: string;
  name: string;
  rating: number;
  summary: string;
  trailer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
class AppComponent {
  title = 'nihilent-angular-movie-app';


  //   sudeesh={
  //     src:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200",
  //   name:"sudeesh"
  //   }

  //   charan={
  //     src:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200",
  //   name:"charan"
  //   }

  //   Vamsi={
  //     src:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200",
  //   name:"Vamsi"
  //   }

  //   // names=['sudeesh','charan','Vamsi']//array

  //   names=[{
  //     src:"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
  //     name:"sudeesh"
  //   },{
  //     src:"https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg",
  //   name:"charan"
  //   },
  // {
  //   src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU",
  //   name:"Vamsi"
  // }] //task1


  // movies = [{
  //   src: "https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg",
  //   name: "Love Today",
  //   rating: "⭐9.1",
  //   summary: `Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and 
  //           directed by Pradeep Ranganathan in his second directorial venture after Comali, and 
  //           produced by Kalapathi S. Aghoram under the banner of AGS Entertainment.[3] Archana Kalpathi
  //            is the creative producer for the film. The film stars Pradeep Ranganathan himself 
  //           (in his acting debut) and Ivana (in her first lead role).`
  // },
  // {
  //   src: "https://mellowplex.s3.amazonaws.com/uploads/item/asset/28986/b.jpg",
  //   name: "Beast",
  //   rating: "⭐9.1",
  //   summary: `Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and 
  //           directed by Pradeep Ranganathan in his second directorial venture after Comali, and 
  //           produced by Kalapathi S. Aghoram under the banner of AGS Entertainment.[3] Archana Kalpathi
  //            is the creative producer for the film. The film stars Pradeep Ranganathan himself 
  //           (in his acting debut) and Ivana (in her first lead role).`
  // }, {
  //   src: "https://upload.wikimedia.org/wikipedia/en/c/c3/Ponniyin_Selvan_I.jpg",
  //   name: "PS1",
  //   rating: "⭐9.1",
  //   summary: `Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and 
  //           directed by Pradeep Ranganathan in his second directorial venture after Comali, and 
  //           produced by Kalapathi S. Aghoram under the banner of AGS Entertainment.[3] Archana Kalpathi
  //            is the creative producer for the film. The film stars Pradeep Ranganathan himself 
  //           (in his acting debut) and Ivana (in her first lead role).`
  // }, {
  //   src: "https://m.media-amazon.com/images/M/MV5BYjNlOWQ2YzEtYTc5Yy00MjcyLTg2YTgtMGVmM2YzZTk4N2JjXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg",
  //   name: "Sardar",
  //   rating: "⭐9.1",
  //   summary: `Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and 
  //           directed by Pradeep Ranganathan in his second directorial venture after Comali, and 
  //           produced by Kalapathi S. Aghoram under the banner of AGS Entertainment.[3] Archana Kalpathi
  //            is the creative producer for the film. The film stars Pradeep Ranganathan himself 
  //           (in his acting debut) and Ivana (in her first lead role).`
  // }
  // ];

  // newMovie = {
  //   src: '',
  //   name: '',
  //   rating: '',
  //   summary: ''

  // }

  // addMovie() {
  // const movie={
  //   src:this.newMovie.src,
  //   name:this.newMovie.name,
  //   rating:this.newMovie.rating,
  //   plot:this.newMovie.summary
  //   this.movies.push(this.newMovie);

  // }
  // this.movies.push(movie);

  // delete(idx: number) {
  //   this.movies.splice(idx, 1);
  // }

}


export { Movie, AppComponent };




