import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="./">Apple Watch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./">HOME</Nav.Link>
            <Nav.Link href="./music">Apple Music</Nav.Link>
            <Nav.Link href="./appletv">Apple TV+</Nav.Link>
            <Nav.Link href="./applearcade">Apple Arcade</Nav.Link>
            <Nav.Link href="./icloud">iCloud</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header