import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class LogIn extends React.Component {
  state = {
    email: null,
    password: null
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createSession(this.state);
    this.setState({ email: null });
    this.setState({ password: null });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Card style={{ width: "26rem", marginTop: "2em" }}>
            <Card.Body>
              <div>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

LogIn.propTypes = {
  createSession: PropTypes.func.isRequired
};

export default LogIn;
