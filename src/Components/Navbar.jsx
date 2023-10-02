import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="fixed-top Navbar" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#hom3">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="Navbar__link" href="#4bout">About</Nav.Link>
            <Nav.Link className="Navbar__link" href="#st4ck">Stack</Nav.Link>
            <Nav.Link className="Navbar__link" href="#educ4tion">Education</Nav.Link>
            <Nav.Link className="Navbar__link" href="#pr0j3cts">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar