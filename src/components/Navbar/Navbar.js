import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css'

export default function MyNav(props) {

  return (
    <div className="mynav">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img className="mwm-logo" src="mathwithmartylogo.png" alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Tutoring</Nav.Link>
            <Nav.Link href="/">Courses</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            {props.user ? 
            <>        
              <Nav.Link href="/">Dashboard</Nav.Link>
              <Button onClick={props.handleLogOut} variant="danger">LogOut</Button>
            </>
            :
            <>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/login">Log in</Nav.Link>
            </>
            }
            <Button className="custom-btn" variant="info"><Nav.Link href="/schedule">Book Now</Nav.Link></Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
