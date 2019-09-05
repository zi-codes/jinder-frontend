import React from "react";
import styled from "styled-components";

// import PropTypes from "prop-types";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

class About extends React.Component {

    render() {
        return (
            <div style={getStyle}>
                <header>
                    <h1 style={headingStyle}>
                        About Us
                    </h1>
                        <body style={textStyle}>We created this web app to make a recruitment process fun, engaging and easy for both job hunter and employers.</body>
                    <h1 style={headingStyle}>
                        Our Vision and Mission
                    </h1>
                       <body>To make recruitment process fun, engaging and easy.</body>
                    <h1 style={headingStyle}>
                        Who Are We?
                    </h1>
                        <body>We are the cool kids gang.</body>
                    <h1 style={headingStyle}>
                        Contact Us
                        <body>Email:</body>
                        <body>Telephone:</body>
                        <body>Instagram:</body>
                    </h1>
                </header>
            </div>
        )
    }
}

export default About;

const textStyle= {
    color: '##FF5903',
}

const headingStyle= {
    text: 'center',
    color: '##FF5903'
}

const getStyle= {
    background: '#f4f4f4',
}

