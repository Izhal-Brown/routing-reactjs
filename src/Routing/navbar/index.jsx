import React from 'react';
import '../biografi/css/style.css';
import {Navbar, Nav, Container, Form, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';


function Navbars() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="sm">
          <Container fluid>
            <Navbar.Brand href="#">Izhal</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link to="/"><i className="bi bi-person-fill"></i>  Biografi</Link>
                <Link to="/register"><i class="bi bi-envelope-fill"></i> Register</Link>
                <Link to="/clock"><i class="bi bi-watch"></i> Clock</Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
}

export default Navbars;