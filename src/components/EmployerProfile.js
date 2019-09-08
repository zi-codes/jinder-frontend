import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Card, Container, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import ImageUpload from "./ImageUpload";

class EmployerProfile extends React.Component {
  state = {
    // for routing
    fireRedirect: this.props.redirect,

    //for profile details
    firstName: null,
    surname: null,
    bio: null,
    companyUrl: null,

    // for image upload

    images: []
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createEmployerProfile(this.state);
    this.setState({ firstName: null });
    this.setState({ surname: null });
    this.setState({ bio: null });
    this.setState({ companyUrl: null });
    this.setState({ images: [] });
    this.setState({ fireRedirect: true });
  };

  handleFieldChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  updateImages = images => {
    this.setState({ images: images });
  };

  render() {
    const { fireRedirect } = this.state;

    return (
      <Container>
        <Row className="justify-content-center">
          <Card style={{ width: "26rem", marginTop: "2em" }}>
            <Card.Body>
              <p style={welcomeMessage}>
                Hey hot stuff. Start courting the market right away by filling
                in your details below...
              </p>

              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    onChange={this.handleFieldChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicSurname">
                  <Form.Label>Surname:</Form.Label>
                  <Form.Control
                    type="text"
                    name="surname"
                    placeholder="Enter your surname"
                    onChange={this.handleFieldChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicBio">
                  <Form.Label>Company Bio:</Form.Label>
                  <Form.Control
                    type="text"
                    name="bio"
                    placeholder="Enter your company bio"
                    onChange={this.handleFieldChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicCompanyUrl">
                  <Form.Label>Company Website:</Form.Label>
                  <Form.Control
                    type="text"
                    name="companyUrl"
                    placeholder="Enter your company website url"
                    onChange={this.handleFieldChange}
                  />
                </Form.Group>

                <ImageUpload updateImages={this.updateImages}></ImageUpload>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>

              {fireRedirect && <Redirect to="/candidate-profiles" />}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

EmployerProfile.propTypes = {
  createEmployerProfile: PropTypes.func.isRequired
};

const welcomeMessage = {
  color: "#FF5903",
  textAlign: "center",
  padding: "10px"
};

export default EmployerProfile;
