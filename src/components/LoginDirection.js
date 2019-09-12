import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../style/images/question.jpg";
import { Card, Button, Row, Container, Col } from "react-bootstrap";

export default class LoginDirection extends Component {
  render() {
    return (
      <div style={containerPrimary}>
        <Container >
          <Row style={RowStyle}>
            <Col style={colStyle}>
              <Card style={cardStyleLeft}>
                <Card.Header style={cardHeaderStyle} as="h5">
                  Who are you?
                </Card.Header>
                <Card.Body>
                  <Button style={buttonStyle} href="candidate-login">
                    Candidate
                  </Button>
                  <Button style={buttonStyle} href="employer-login">
                    Employer
                  </Button>
                </Card.Body>
                <Card.Footer style={footerStyle}>
                  <Card.Link style={linkStyle} href="/">
                    No account? Sign up here
                  </Card.Link>
                </Card.Footer>
              </Card>
              <Container style={pageStrapLine}>
                It was a match made in Jinder.
              </Container>
            </Col>
            <Col>
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
  height: "100%",
  position: "center",
  backgroundAttachment: "fixed",
  position: "center",
  paddingBottom: "400px"
};

const RowStyle = {
  height: "100%"
};

const cardStyleLeft = {
  width: "18rem",
  textAlign: "center",
  border: "none",
  margin: "auto",
  marginTop: "150px",
  backgroundColor: "#FFFFFF99"
};

const cardHeaderStyle = {
  background: "#FF5903",
  color: "#fff"
};

const buttonStyle = {
  background: "#FF5903",
  border: "none",
  margin: "10px"
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

const pageStrapLine = {
  marginTop: '100px',
  fontSize: 50,
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'center'
}
