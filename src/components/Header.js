import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import whiteLogo from "../style/images/jinder-flame-white.png";
import orangeLogo from "../style/images/jinder-flame-orange.png";
import globalUrl from "../globalUrl";

export default function Header() {

  // Navbar colour fade
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY >100
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  const destroySession = () => {
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
      .then(destroyUserId())
      .catch(error => console.error(error));
  };

  const destroyUserId = () => {
    sessionStorage.clear();
    this.props.destroyRedirects();
  };

  //Change colour of links based on href 

  let linkColour;
  let logo;

  const linkColourChecker = () => {
    const pagesWithBackgrounds = ["", "about", "login-direction",   "sign-up-direction", "login-or-sign-up" ]

    const currentPage = window.location.href.split("/").slice(-1)[0]

    if(pagesWithBackgrounds.includes(currentPage)) {
      linkColour = "white"
      logo = whiteLogo
    } else {
      linkColour = "#FF5903"
      logo = orangeLogo
    } 
   }
   
   console.log(linkColourChecker())

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
        <Nav.Link style={{color : `${linkColour}`}} href="/login-direction">
          Sign In
        </Nav.Link>
      );
      signUp = (
        <Nav.Link style={{color : `${linkColour}`}} href="/sign-up-direction">
          Sign Up
        </Nav.Link>
      );
      viewProfilesNotLoggedIn = (
        <Nav.Link style={{color : `${linkColour}`}} href="/login-or-sign-up">
          View Profiles
        </Nav.Link>
      );
    } else {
      signOut = (
        <Nav.Link onClick={destroySession} style={{color : `${linkColourChecker()}`}} on href="/">
          Sign Out
        </Nav.Link>
      );
      yourProfile = (
        <NavDropdown title={<span style={{color : `${linkColour}`}}>Your Profile</span>}>
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
        <Nav.Link style={{color : `${linkColour}`}} href="/employer-profiles">
          View Employers
        </Nav.Link>
      );
      viewMatchesAsCandidate = (
        <Nav.Link style={{color : `${linkColour}`}} href="/candidate-matches">
          View Matches
        </Nav.Link>
      );
    } else if (sessionStorage.getItem("employer_id") !== null) {
      viewProfilesAsEmployer = (
        <Nav.Link style={{color : `${linkColour}`}} href="/candidate-profiles">
          View Candidates
        </Nav.Link>
      );
      viewMatchesAsEmployer = (
        <Nav.Link style={{color : `${linkColour}`}} href="/employer-matches">
          View Matches
        </Nav.Link>
      );
    }

    const backgroundCol =
      navBackground ? "#FF5903" : "transparent"

    return (
      <header style={headerStyle}>
        <Navbar
          expand="lg"
          style={{backgroundColor : `${backgroundCol}`, transition: '1s ease'}}
        >
          <Navbar.Brand href="/">
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
              <Nav.Link style={{color : `${linkColour}`}} href="/">
                Home
              </Nav.Link>
              {viewProfilesNotLoggedIn}
              {viewProfilesAsCandidate}
              {viewProfilesAsEmployer}
              {viewMatchesAsCandidate}
              {viewMatchesAsEmployer}

              {yourProfile}
              <Nav.Link style={{color : `${linkColour}`}} href="/about">
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

Header.propTypes = {
  destroyRedirects: PropTypes.func.isRequired
};

const headerStyle = {
  position: "fixed",
  width: "100%",
  zIndex: "5",
};

const dropdownLinkStyle = {
  color: "#FF5903"
};