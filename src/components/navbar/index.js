import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const Menu = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="sm" bg="primary" style={{marginBottom: '14px'}} variant="dark">
          <Container>
             <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navabarScroll" id="navbarScroll" />
            <Navbar.Brand href="#home">BRM Contacts</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/create">Nuevo Contacto</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>

        </Navbar>
    </div>
  )
}
