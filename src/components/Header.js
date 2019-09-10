
import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl  } from 'react-bootstrap';
import logo from '../style/images/jinder-flame-white.png'
import globalUrl from "../globalUrl";

export default class Header extends React.Component {

  destroySession = () => {
    fetch(`${globalUrl}/api/sessions`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          email: sessionStorage.getItem('user_')
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .then(this.destroyUserId())
      .catch(error => console.error(error));
  };

  destroyUserId = () => {
    sessionStorage.clear();
  };

  render() {

    let signIn;
    let signUp;
    let signOut;

    if(sessionStorage.getItem('user_id') === null) {
      signIn = <Nav.Link style={linkStyle} href="/">Sign In</Nav.Link>
      signUp = <Nav.Link style={linkStyle} href="/">Sign Up</Nav.Link>
    } else {
      signOut = <Nav.Link onClick={this.destroySession} style={linkStyle} on href="/">Sign Out</Nav.Link>
      }



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
              <Nav.Link style={linkStyle} href="/profiles">View Profiles</Nav.Link>
              <NavDropdown title={<span style={linkStyle}>Your Profile</span>}>
                <NavDropdown.Item style={dropdownLinkStyle} href="/profile">Create Profile</NavDropdown.Item>
                <NavDropdown.Item style={dropdownLinkStyle}  href="/profile">Edit</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link style={linkStyle} href="/about">About Us</Nav.Link>
            </Nav>
            {signIn}
            {signUp}
            {signOut}
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

const headerStyle = {
  background: "#FF5903",
}

const linkStyle = {
  color: "#fff"
}

const dropdownLinkStyle = {
  color: "#FF5903"
}