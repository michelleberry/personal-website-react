import React from 'react';
import{Link} from 'react-router-dom';
import {
  Nav, NavDropdown, Navbar, Container
} from 'react-bootstrap';

export default function Mynavbar() {
  return (
    <Navbar bg="light" expand="lg" style={{zIndex: 1, position: 'relative'}}>
        <Container>
            <Navbar.Brand as={Link} to='/'>Michelle Berry</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
              <Nav className="me-auto" id="basic">
                  <Nav.Link href="https://github.com/michelleberry">GitHub</Nav.Link>
                  <Nav.Link as={Link} to='/resume'>Resume</Nav.Link>
                  <Nav.Link href="https://www.linkedin.com/in/michelle-berry-b43b47201/" className="nav-link-one">LinkedIn</Nav.Link>
                  <NavDropdown title={<span>Co-op/Intern Blogs</span>} id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to='/wtr_blog/1/1'>Summer-Fall 2021</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/wtr_blog/2/1'>Summer 2022</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/wtr_blog/3/1'>Winter 2023</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to='/galleries' className="nav-link-one">Art Gallery</Nav.Link>
                  <Nav.Link as={Link} to='/fartgalleries' className="nav-link-one">Fiber Arts</Nav.Link>
              </Nav>
            
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
