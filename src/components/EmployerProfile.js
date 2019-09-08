import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Img from "react-fix-image-orientation";
import { Redirect } from "react-router-dom";
import safeImgCheck from "./SafeImageChecker";

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

    images: [],
    imageStatus: null
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

  // Image Upload functions

  renderUploadImagesButton = () => {
    return (
      <Form.Control
        name="images"
        type="file"
        ref={field => (this.ImagesField = field)}
        multiple={true}
        accept="image/*"
        onChange={e => this.handleImagesChange(e)}
      ></Form.Control>
    );
  };

  renderSelectedImagesFiles = () => {
    let fileDOMs = this.state.images.map((el, index) => {
      return (
        <li key={index} style={{ listStyle: "none", padding: "10px" }}>
          <div className="photo">
            <Img
              width={250}
              src={el.id ? el.url : URL.createObjectURL(el)}
              style={{ alignSelf: "center" }}
            />
          </div>
        </li>
      );
    });

    return <ul className="selected-images">{fileDOMs}</ul>;
  };

  renderLoadingStatus = () => {
    if (this.state.imageStatus === "checking") {
      return <div>Now checking your images</div>;
    } else if (this.state.imageStatus === "checked") {
      return <div>Your image has been checked</div>;
    }
  };

  handleImagesChange(event) {
    let files = this.ImagesField.files;
    console.log(safeImgCheck(files[0]));
    let { images } = this.state;
    for (let i = 0; i < files.length; i++) {
      images.push(files.item(i));
    }
    this.setState({ imageStatus: "checking" });
    this.setState({ images: images });
  }

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

                <Form.Group controlId="formImages">
                  <Form.Label>Profile picture:</Form.Label>
                  {this.renderUploadImagesButton()}
                  {this.renderSelectedImagesFiles()}
                  {this.renderLoadingStatus()}
                </Form.Group>

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
