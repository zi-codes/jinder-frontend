import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../style/images/work-image.jpg";
import { Card, Button, Row, Container, Col } from "react-bootstrap";

export default class HomePage extends Component {
  render() {
    return (
      <div style={containerPrimary}>
        <div style={welcomeMessageContainer}>
          <h1 style={welcomeMessage1}>
            The new way to get paid is here...
          </h1>
          <h6 style={welcomeMessage2}>
            This is the future of finding the perfect professional match.
          </h6>
        </div>
        <Container>
          <Row style={RowStyle}>
            <Col style={colStyle}>
              <Card style={cardStyleLeft}>
                <Card.Header style={cardHeaderStyle} as="h5">
                  Candidate?
                </Card.Header>
                <Card.Body>
                  <Card.Text style={cardFontStyle}>
                    The future of professional match making is here.
                    <br></br>
                    Sign up today and reap the rewards of finding your perfect
                    employer.
                  </Card.Text>
                  <Button style={buttonStyle} href="candidate-sign-up">
                    Sign Up
                  </Button>
                  <br></br>
                </Card.Body>
                <Card.Footer style={footerStyle}>
                  <Card.Link style={linkStyle} href="/candidate-login">
                    Got an account? Sign in here
                  </Card.Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card style={cardStyleRight}>
                <Card.Header style={cardHeaderStyle} as="h5">
                  Employer?
                </Card.Header>
                <Card.Body>
                  <Card.Text style={cardFontStyle}>
                    The future of professional match making is here.
                    <br></br>
                    Sign up today and reap the rewards of finding your perfect
                    employee.
                  </Card.Text>
                  <Button style={buttonStyle} href="/employer-sign-up">
                    Sign Up
                  </Button>
                  <br></br>
                </Card.Body>
                <Card.Footer style={footerStyle}>
                  <Card.Link style={linkStyle} href="/employer-login">
                    Got an account? Sign in here
                  </Card.Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const containerPrimary = {
  backgroundImage: `url(${background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "800px",
  position: "center"
};

const RowStyle = {
  height: "700px"
};

const welcomeMessageContainer = {
  backgroundColor: "rgba(52, 52, 52, 0.7)"
};

const welcomeMessage1 = {
  color: "#fff",
  textAlign: "center",
  paddingTop: "25px"
};

const welcomeMessage2 = {
  color: "#fff",
  textAlign: "center",
  paddingBottom: "25px"
};

const cardStyleLeft = {
  width: "18rem",
  textAlign: "center",
  border: "none",
  margin: "auto",
  marginTop: "100px",
  backgroundColor: "#FFFFFF99"
};

const cardStyleRight = {
  width: "18rem",
  textAlign: "center",
  border: "none",
  margin: "auto",
  marginTop: "100px",
  backgroundColor: "#FFFFFF99"
};

const cardHeaderStyle = {
  background: "#FF5903",
  color: "#fff"
};

const buttonStyle = {
  background: "#FF5903",
  border: "none",
  marginBottom: "10px"
};

const linkStyle = {
  fontSize: 13
};

const colStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
};

const footerStyle = {
  backgroundColor: "#C0C0C0"
};

const cardFontStyle = {
  fontWeight: "bold"
};
