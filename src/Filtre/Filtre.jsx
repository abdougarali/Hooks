import React, { useState } from 'react';
import './Filter.css'
function Filter({Movies,setMovies}) {
    const [filtertext, setFiltertext] = useState('');
   const [filtrRating,setfilterRating]=useState('');
    

  
  const Hnadilfilter=()=> {
     const filtredMovie=Movies.filter((movie)=>
     movie.title.toLowerCase().includes(filtertext.toLowerCase()) && (!filtrRating || movie.rating===parseFloat(filtrRating))
  );
  setMovies(filtredMovie)
  }

  


  
    
  
    return (
      <div className="filter">
        
        <input
          type="text"
          name="title"
          placeholder="Filter by title"
          value={filtertext}
          onChange={(e)=>setFiltertext(e.target.value)}
        />
        <input
          type="number"
          name="rating"
          placeholder="Filter by rating"
          value={filtrRating}
          onChange={(e)=>setfilterRating(e.target.value)}
        />
        <button
          onClick={Hnadilfilter}
        >
          Apply Filter
        </button>
        
      </div>
    );
  }
  
  export default Filter;