import React from 'react'
import MovieCard from './MovieCard'
import './MoviList.css'
function MovieList({Movies,AddMovie}) {
  return (
    <div className='MoviList'>
        {Movies.map((movie)=> (<MovieCard key={movie.id} movie={movie}/>))}
        
    </div>
  )
}

export default MovieList