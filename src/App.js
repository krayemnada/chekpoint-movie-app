import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Pictures from './components/pictures/Pictures';
import SideBar from './components/sideBar/SideBar';
import MovieList from './components/movieList/MovieList';


function App() {
  const [movieData, setMovieData]= useState([
    {
      id: Math.random(),
      title : "Conjuring 3",
      posterUrl:"https://www.mediacritik.com/wp-content/uploads/2020/07/the-con-696x431.jpg",
      rating:5
      
      },
      
      {
        id: Math.random(),
      title : "Interstellar",
      posterUrl:"https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg",
      rating:4
      },
  
      {
        id: Math.random(),
      title : "No Time To Die",
      posterUrl:"https://i.dailymail.co.uk/1s/2020/10/01/01/33837226-8792377-image-a-45_1601513129403.jpg",
      rating:4
      
      },
      {
        id: Math.random(),
      title : "The Purge Election Year",
      posterUrl:"http://gonewiththetwins.com/new/wp-content/uploads/2016/07/purgeelectionyear.jpg",
      rating:3
      },
      {
        id: Math.random(),
      title : "The Curse of la llorona",
      posterUrl:"https://dci832c741skk.cloudfront.net/assets/files/10206/curse-of-la-llorona-movie-review.800x600.jpg",
      rating:5
      
      },
      {
        id: Math.random(),
      title : "To All the Boys",
      posterUrl:"https://upload.wikimedia.org/wikipedia/en/d/d0/To_all_the_boys_always_and_forever.jpg",
      rating:6
      
      },
      {
        id: Math.random(),
      title : "spiderman No way Home",
      posterUrl:"https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/10/Andrew-Gardfield-in-Spider-Man-No-Way-Home.confirmed.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
      rating:5
      
      },
      {
        id: Math.random(),
      title : "A Quiet Place Part II",
      posterUrl:"https://m.media-amazon.com/images/M/MV5BMTE2ODU4NDEtNmRjNS00OTk1LTg4NmMtNTAzYzVlNzJmYjgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      rating:4
      
      },
      {
        id: Math.random(),
      title : "Gravity",
      posterUrl:"https://fr.web.img6.acsta.net/pictures/210/232/21023233_20130729173134181.jpg",
      rating:4
      
      },
      {
        id: Math.random(),
      title : "Get Out",
      posterUrl:"https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
      rating:7
      },
      {
        id: Math.random(),
      title : "X-MEN",
      posterUrl:"https://fr.web.img6.acsta.net/pictures/16/04/13/17/27/399447.jpg",
      rating:5
      
      },
      {
        id: Math.random(),
      title : "Black Widow",
      posterUrl:"https://lumiere-a.akamaihd.net/v1/images/image_b97b56f3.jpeg?region=0%2C0%2C540%2C810" ,
      rating:4
      
      },
      {
        id: Math.random(),
      title : "Harry Potter and the half-blood prince",
      posterUrl:"https://play-lh.googleusercontent.com/L8RMA1CQCx-CAxzTfyF-5Vh-pSJwIbr1qIxy9LUOclzkg5N1CFbsQctYT19IEuPfIZa1PzKep9191naqTao",
      rating:5
      
      },
      
      {
        id: Math.random(),
      title : "Insidious the last key",
      posterUrl:"https://upload.wikimedia.org/wikipedia/en/3/34/InsidiousTheLastKey.jpg",
      rating:6
      
      },
      
      {
        id: Math.random(),
      title : "Raya and the last dragon",
      posterUrl:"https://fr.web.img5.acsta.net/c_310_420/pictures/21/05/11/10/35/1825655.jpg",
      rating:5
      
      },
    ]
      )
 


  return (
    <div className="App">
      <Header/>
      <Pictures/>
      <SideBar/>
      <MovieList movieData={movieData}/>
      
      <Footer/>
    </div>
  );
}

export default App;
