import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from 'gatsby'

export default (props) => (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand><Link to="/">Danton</Link></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link>
          <Link to="/">Home</Link>
      </Nav.Link>
      <Nav.Link>
          <Link to="./about">About Us</Link>
      </Nav.Link>
      <Nav.Link>
          <Link to="./contact">Contact</Link>
      </Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
)