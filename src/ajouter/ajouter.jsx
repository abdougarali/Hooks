import React,{useState} from 'react'
import './ajouter.css';
import { } from 'react-router-dom';
import { Form,Col,InputGroup, Row ,Button } from 'react-bootstrap';
import MovieList from '../Movie/MovieList';
function Ajouter({AddMovie}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState('');
    const [trailerURL,setTrailerURL]=useState('');



    const handleSubmit = (e) => {
        e.preventDefault();

    
           const newMovie = {
            id:Math.random(),
            title,
            description,
            posterURL,
            rating: parseFloat(rating),
          };
      
          // Call the addMovie function to add the new movie
          AddMovie(newMovie);
      
          // Clear the form input fields
          // setTitle('');
          // setDescription('');
          // setPosterURL('');
          // setRating('');
  
        e.target.reset(); 
        };
        return (
 





<div className='form'>

    <h2 className='text-form' >Add Movie : </h2>

   <Form  onSubmit={handleSubmit}>
          <Row className='mb-3'>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label className='text-form :'>Title :</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  placeholder='title'
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </InputGroup>
            </Form.Group>
            </Row>  
        
        
        <Row className='mb-3'>
         <Form.Group as={Col} md="4" controlId="validationFormik01">
          <Form.Label className='text-form'>Description :</Form.Label>
           <Form.Control
             placeholder='description :'
             value={description}
             onChange={(e) => setDescription(e.target.value)}
             required
           /> 
         </Form.Group>
        </Row> 
        <Row className='mb-3'>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label className='text-form'>Poster URL</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                 placeholder='img'
                 type="url"
                 value={posterURL}
                 onChange={(e) => setPosterURL(e.target.value)}
                 required
                />   
              </InputGroup>
            </Form.Group>
          </Row>
        
          <Row className='mb-3'>
          
            
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label className='text-form'>Rating : </Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  placeholder='rating'
                      type="number"
                      value={rating}
                      min="0"
                      max="10"
                      onChange={(e) => setRating(e.target.value)}
                      required
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label className='text-form'>Poster URL</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                 placeholder='Trailer'
                 type="url"
                 value={trailerURL}
                 onChange={(e) => setTrailerURL(e.target.value)}
                 required
                />   
              </InputGroup>
            </Form.Group>
          </Row>
       
         <Button type="submit">Add Movie</Button>
        
    </Form>
    
  </div>

     
  
  )
}

export default Ajouter