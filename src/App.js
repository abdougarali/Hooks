import './App.css';
import MovieList from './Movie/MovieList';
import Filtre from './Filtre/Filtre';
import React,{useState,useEffect} from 'react';
import Ajouter from './ajouter/ajouter';
function App() {




  

 const [Movies,setMovies]=useState([
  
  {
    id: 1,
    title: 'See',
    description: 'Description ',
    posterURL: 'https://flxt.tmsimg.com/assets/p17602423_b_v8_ac.jpg',
    rating: 4
  },

  {
    id: 2,
    title: 'TIRAILLEURS',
    description: 'Description ',
    posterURL: 'https://media.senscritique.com/media/000021016363/300/tirailleurs.jpg',
    rating: 4.5
  },
  {
    id: 3,
    title: 'Fast & Furious',
    description: 'Description ',
    posterURL: 'https://fr.web.img3.acsta.net/c_310_420/pictures/23/05/10/10/55/5129031.jpg',
    rating: 5
  },
  {
    id: 4,
    title: 'CHATRAPATHI',
    description: 'Description ',
    posterURL: 'https://mamul.am/images/pics/230623/vior-chatrapathi-202-u188213-1.jpg',
    rating: 7.8
  },
])

    
  

  const AddMovie =(newmovie)=>{
    const updateMovies=[... Movies,newmovie]
     setMovies(updateMovies);

    localStorage.setItem('Movies',JSON.stringify(updateMovies));
  };

  useEffect(()=>{
 const storedMovies=localStorage.getItem('Movies');
 if(storedMovies){
  setMovies(JSON.parse(storedMovies));
 }

 

},[])


  return (
    <div className="App">
      <Filtre Movies={Movies} setMovies={setMovies} />
      <MovieList Movies={Movies}  setMovies={setMovies}  />
      <Ajouter  AddMovie={AddMovie}/>

    </div>
  );
}

export default App;
