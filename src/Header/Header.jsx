import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap'
import{Link} from 'react-router-dom'; 
const Header = () => {
  return (
<div>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={{marginTop:"5%"}}>Homes</Link>
            <Link to="/ajouter" style={{marginTop:"5%",marginLeft:'5%'}}>Ajouter</Link>
            {/* <Link to="/filter" style={{marginTop:"5%",marginLeft:'5%'}}>Filter</Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
  )
}

export default Header