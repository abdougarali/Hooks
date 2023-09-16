import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieCard({movie}) {
    const {title,description,posterURL,rating}=movie;
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterURL} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p>{description}</p>
        <p>note : {rating}</p>
        <Button>
        <Link to={`/trailer/${title}`} style={{color:"white"}}>Trailer</Link>
        </Button>
       </Card.Body>
    </Card>
     
    

    </div>
  )
}

export default MovieCard