import React from "react";
import logo from "../Jinder2.png";
// import PropTypes from "prop-types";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";



class AboutUs extends React.Component {
    state = { };

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} width='500' height='250' className="App-logo" alt="logo" />
                    <h1>About Us</h1>
                    <h2>something...</h2>
                </header>
            </div>
        )
    }
}

export default AboutUs;