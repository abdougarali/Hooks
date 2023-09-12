import React from 'react';
import {Card} from 'react-bootstrap';
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
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard