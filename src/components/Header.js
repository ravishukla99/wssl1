import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, Link } from 'react-router-dom';


const Header = () => {
	return (
		<>
		<Navbar expand="lg" className="bg-body-tertiary fixed-top">
		<Container>
		<Image className='.ms-auto' src="\Images\WSSL FINAL LOGO 3_L2.jpg" style={{ width:'10rem' }} />
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
			
		  <Nav
		  className="ms-auto my-2 my-lg-0">
		  <Nav.Link as={Link} to="/" className='fs-5 fw-medium'>Home</Nav.Link>
		  <Nav.Link as={Link} to="/about" className='fs-5 fw-medium'>About</Nav.Link>
		  <Nav.Link as={Link} to="/services" className='fs-5 fw-medium'>Services</Nav.Link>
		  <Nav.Link as={Link} to="/contact" className='fs-5 fw-medium'>Contact</Nav.Link>
		  

		</Nav>
	


		  </Navbar.Collapse>
		  </Container>
		  </Navbar>
		  <br/><br/><br/>
		</>
  
	  
  )
}

export default Header;
