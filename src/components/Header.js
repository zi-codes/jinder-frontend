import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../style/images/jinder-flame-white.png";
import globalUrl from "../globalUrl";

export default class Header extends React.Component {
  destroySession = () => {
    fetch(`${globalUrl}/api/sessions`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: sessionStorage.getItem("user_")
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .then(this.destroyUserId())
      .catch(error => console.error(error));
  };

  destroyUserId = () => {
    sessionStorage.clear();
    this.props.destroyRedirects();
  };

  render() {
    // console.log(sessionStorage.getItem("user_id"));
    // console.log(sessionStorage.getItem("employer_id"));
    // console.log(sessionStorage.getItem("user_id") !== null);

    let signIn;
    let signUp;
    let signOut;
    let yourProfile;
    let viewProfilesNotLoggedIn;
    let viewProfilesAsCandidate;
    let viewProfilesAsEmployer;
    let viewMatchesAsEmployer;
    let viewMatchesAsCandidate;

    if (
      sessionStorage.getItem("user_id") === null &&
      sessionStorage.getItem("employer_id") === null
    ) {
      signIn = (
        <Nav.Link style={linkStyle} href="/login-direction">
          Sign In
        </Nav.Link>
      );
      signUp = (
        <Nav.Link style={linkStyle} href="/">
          Sign Up
        </Nav.Link>
      );
      viewProfilesNotLoggedIn = (
        <Nav.Link style={linkStyle} href="/login-or-sign-up">
          View Profiles
        </Nav.Link>
      );
    } else {
      signOut = (
        <Nav.Link onClick={this.destroySession} style={linkStyle} on href="/">
          Sign Out
        </Nav.Link>
      );
      yourProfile = (
        <NavDropdown title={<span style={linkStyle}>Your Profile</span>}>
          <NavDropdown.Item style={dropdownLinkStyle} href="/profile">
            Create Profile
          </NavDropdown.Item>
          <NavDropdown.Item style={dropdownLinkStyle} href="/profile">
            Edit
          </NavDropdown.Item>
        </NavDropdown>
      );
    }

    if (sessionStorage.getItem("user_id") !== null) {
      viewProfilesAsCandidate = (
        <Nav.Link style={linkStyle} href="/employer-profiles">
          View Employers
        </Nav.Link>
      );
      viewMatchesAsCandidate = (
        <Nav.Link style={linkStyle} href="/candidate-matches">
          View Matches
        </Nav.Link>
      );
    } else if (sessionStorage.getItem("employer_id") !== null) {
      viewProfilesAsEmployer = (
        <Nav.Link style={linkStyle} href="/candidate-profiles">
          View Candidates
        </Nav.Link>
      );
      viewMatchesAsEmployer = (
        <Nav.Link style={linkStyle} href="/employer-matches">
          View Matches
        </Nav.Link>
      );
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
              <Nav.Link style={linkStyle} href="/">
                Home
              </Nav.Link>
              {viewProfilesNotLoggedIn}
              {viewProfilesAsCandidate}
              {viewProfilesAsEmployer}
              {viewMatchesAsCandidate}
              {viewMatchesAsEmployer}

              {yourProfile}
              <Nav.Link style={linkStyle} href="/about">
                About Us
              </Nav.Link>
            </Nav>
            {signIn}
            {signUp}
            {signOut}
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

Header.propTypes = {
  destroyRedirects: PropTypes.func.isRequired
};

const headerStyle = {
  background: "#FF5903"
};

const linkStyle = {
  color: "#fff"
};

const dropdownLinkStyle = {
  color: "#FF5903"
};
