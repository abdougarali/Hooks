import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';

const Trailer = ({Movies}) => {
const {title}=useParams();


const movie=Movies.find((el)=>el.title === title)

if (!movie){
  return alert("movie not found")
}

const {trailerURL,description}=movie;

  return (
    <div className='tra'>
      <h1 className='text-form'>{title} </h1>

<ReactPlayer
  url={trailerURL}
  width="560px"
  height="315px"
  controls={true} // Show video controls (play, pause, etc.)
  playing={true} // Automatically start playing the video
  loop={true} // Disable looping
  muted={true}
/>
<p className='text-form'>{description}</p>
    </div>
  )
}

export default Trailer