import React, { Component } from 'react'
import { Container, Col, Row } from "react-bootstrap";

export default class Footer extends Component {
  render() {

    return (
    <div>
      <div style={phantom} />
      <Container>
        <Row style={style}>
          <Col >
          <a style={{ color: "#888888" }} href="/">Home</a><br/>
          <a style={{ color: "#888888" }} href="/login-or-sign-up">View Profiles</a><br/>
          <a style={{ color: "#888888" }} href="/login-direction">Sign In</a><br/>
          <a style={{ color: "#888888" }} href="/sign-up-direction">Sing Up</a><br/>
          <a style={{ color: "#888888" }} href="/about">About Us</a><br/>
          </Col>
          <Col>
            MegaMatch Conglomerate trading as Jinder Ltd. All rights reserved. 
          </Col>
          <Col>
            Jinder HQ<br/>
            50 Commercial St<br/>
            Spitalfields<br/>
            London<br/>
            E1 6LT
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

const style = {
  background: "#F0F0F0",
  textAlign: "center",
  padding: "20px",
  position: "absolute",
  left: "0",
  bottom: "0",
  height: "190px",
  width: "100%",
  color: "#888888"
}

const phantom = {
background: "#F0F0F0",
display: 'block',
padding: '20px',
height: '190px',
width: '100%',
position: "relative"
}