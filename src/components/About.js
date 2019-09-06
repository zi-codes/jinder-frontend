import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "react-bootstrap/Button";
import { Form, Label, Input, FormGroup } from 'reactstrap';


// import PropTypes from "prop-types";
// import Form from "react-bootstrap/Form";

const H1 = styled.h1`
text-align: center;
color: #FF5903;
font-size: 100px;
`
const themeSettings = styled.h1`
    main: 'mediumseagreen';
`

// const Body = styled.body`
// text-align: center;
// color: blue;
// font-size: 50px;

// &:active,
//   &:focus {
//     text-align: left;
//   }
// `
const Body = styled.body`
    font-size: 16px;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    padding: 7px 33px;
    border-radius: 3px;
    color: #999;
    cursor: text;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    background: #fafafa;
    &:active,
    &:focus {
        text-align: center;
    }
`

class About extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <ThemeProvider theme={themeSettings}> 
                    <H1>
                        About Us
                    </H1>
                    </ThemeProvider>
                        <Body>We created this web app to make a recruitment process fun, engaging and easy for both job hunter and employers.</Body>
                    <H1>
                        Our Vision and Mission
                    </H1>
                       <Body>To make recruitment process fun, engaging and easy.</Body>
                    <H1>
                        Who Are We?
                    </H1>
                        <Body>We are the cool kids gang.</Body>
                    <H1>
                        Contact Us
                        <Body><Button href="mailto:anastasiia.blaha@gmail.com">Email</Button></Body>
                        <Body>Telephone:</Body>
                        <Body>Instagram:</Body>
                    </H1>
                </header>
            </div>
        )
    }
}

export default About;

