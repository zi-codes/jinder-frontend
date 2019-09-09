import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl  } from 'react-bootstrap';
import logo from '../style/images/jinder-flame-white.png'

export default class Header extends React.Component {
  render() {
    return (
      <header style={headerStyle}>
        <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="35"
            height="45"
            className="d-inline-block align-top"
            alt="Jinder"
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link style={linkStyle} href="/">Home</Nav.Link>
              <Nav.Link style={linkStyle} href="/">Sign In</Nav.Link>
              <Nav.Link style={linkStyle} href="/profiles">View Profiles</Nav.Link>
              <NavDropdown title={<span style={linkStyle}>Your Profile</span>}>
                <NavDropdown.Item style={dropdownLinkStyle} href="/profile">Create Profile</NavDropdown.Item>
                <NavDropdown.Item style={dropdownLinkStyle}  href="/profile">Edit</NavDropdown.Item>
                {/* <NavDropdown.Item style={dropdownLinkStyle}  href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link style={linkStyle} href="/about">About Us</Nav.Link>
            </Nav>
            <Nav.Link style={linkStyle} href="/">Sign Up</Nav.Link>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button style={buttonStyle} variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

const headerStyle = {
  background: '#FF5903',
}

const linkStyle = {
  color: '#fff'
}

const dropdownLinkStyle = {
  color: '#FF5903'
}

const buttonStyle = {
  background: '#fff',
  border: '#fff',
  color: '#FF5903'
}