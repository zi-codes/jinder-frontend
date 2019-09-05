import React from "react";
import styled from "styled-components";

// import PropTypes from "prop-types";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

class About extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <h1 style={headingStyle}>
                        About Us
                    </h1>
                    <h1 style={headingStyle}>
                        Our Vision and Mission
                    </h1>
                    <h1 style={headingStyle}>
                        Who Are We?
                    </h1>
                    <h1 style={headingStyle}>
                        Contact Us
                    </h1>
                    <body style={textStyle}> 

                    </body>
                </header>
            </div>
        )
    }
}

export default About;

const textStyle= {
    color: '#fff',
}

const headingStyle= {
    color: '#f4f4f4'
}

