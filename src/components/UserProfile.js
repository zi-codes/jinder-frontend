import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Card, Row, Container, Col } from "react-bootstrap";
import Select from "react-select";
// import Img from "react-fix-image-orientation";
import { industryOptions } from "../data/IndustryData";
import { skillsOptions } from "../data/SkillsData";
import { Redirect } from "react-router-dom";
import ImageUpload from "./ImageUpload";

import background from "../style/images/beaver.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PreventDisplay from "./PreventDisplay";

class UserProfile extends React.Component {
  state = {
    // for routing
    fireRedirect: false,

    // sessionStorage.setItem("user_first_name", this.state.firstName);
    // sessionStorage.setItem("user_surname", this.state.surname);
    // sessionStorage.setItem("user_industry", this.state.industry);
    // sessionStorage.setItem("user_bio", this.state.bio);
    // sessionStorage.setItem("user_skills", this.state.skills);

    //for profile details
    firstName: sessionStorage.getItem("user_first_name"),
    surname: sessionStorage.getItem("user_surname"),
    industry: sessionStorage.getItem("user_industry"),
    skills: sessionStorage.getItem("user_skills"),
    bio: sessionStorage.getItem("user_bio"),
    personalityTraits: sessionStorage.getItem("user_personality"),

    skills_valid: false,
    industry_valid: false,

    // for image upload

    images: []
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.skills && this.state.industry) {
      this.props.createProfile(this.state);
      this.setState({ firstName: null });
      this.setState({ surname: null });
      this.setState({ industry: null });
      this.setState({ skills: null });
      this.setState({ bio: null });
      this.setState({ images: [] });
      this.setState({ fireRedirect: true });
    } else {
      toast.info("Please fill in your industry and skills!");
    }
  };

  handleNameChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleIndustryChange = event => {
    if (event.value) {
      this.setState({ industry_valid: true });
    }
    this.setState({ industry: event.value });
  };

  handleSkillsChange = event => {
    const skills = [];
    event.forEach(skill => {
      skills.push(skill.value);
    });
    if (skills.length > 0) {
      this.setState({ skills_valid: true });
    }
    this.setState({ skills: skills.join() });
  };

  handleBioChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handlePersonalityTraitsChange = event => {
    const skills = [];
    event.forEach(skill => {
      skills.push(skill.value);
    });
    this.setState({ skills: skills.join() });
  };

  updateImages = images => {
    this.setState({ images: images });
  };

  updateImageCheckStatus = status => {
    this.setState({ imageNeedsChecking: status });
  };

  clearPhotos = () => {
    sessionStorage.setItem("user_first_name", this.state.firstName);
    sessionStorage.setItem("user_surname", this.state.surname);
    sessionStorage.setItem("user_industry", this.state.industry);
    sessionStorage.setItem("user_bio", this.state.bio);
    sessionStorage.setItem("user_skills", this.state.skills);
    sessionStorage.setItem("user_personality", this.state.skills);
    window.location.reload();
  };

  rememberSkills = () => {
    console.log("hello");
    let skillsArray = sessionStorage.getItem("user_skills").split(",");
    console.log(skillsArray);
    let hashArray = [];
    skillsArray.forEach(item => hashArray.push({ label: item, value: item }));
    console.log("hash arry is" + hashArray);
    return hashArray;
  };

  render() {
    console.log(sessionStorage.getItem("user_skills"));
    const { fireRedirect } = this.state;
    if (sessionStorage.getItem("user_id") === null) {
      console.log(sessionStorage.getItem("user_id"));
      return <PreventDisplay />;
    } else {
      console.log(sessionStorage.getItem("user_id"));
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
                      defaultValue={sessionStorage.getItem("user_first_name")}
                      onChange={this.handleNameChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicSurname">
                    <Form.Label>Surname:</Form.Label>
                    <Form.Control
                      type="text"
                      name="surname"
                      placeholder="Enter your surname"
                      defaultValue={sessionStorage.getItem("user_surname")}
                      onChange={this.handleNameChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicIndustry">
                    <Form.Label>Industry:</Form.Label>
                    <React.Fragment>
                      <Select
                        isSingle
                        options={industryOptions}
                        defaultValue={{
                          label: sessionStorage.getItem("user_industry"),
                          value: sessionStorage.getItem("user_industry")
                        }}
                        className="basic-single-select"
                        classNamePrefix="select"
                        name="industry"
                        onChange={this.handleIndustryChange}
                        placeholder="Enter your industry"
                      />
                    </React.Fragment>
                  </Form.Group>

                  <ToastContainer />

                  <Form.Group controlId="formBasicSkills">
                    <Form.Label>Job Skills:</Form.Label>
                    <Select
                      isMulti
                      name="skills"
                      options={skillsOptions}
                      defaultValue={
                        sessionStorage.getItem("user_skills") &&
                        sessionStorage
                          .getItem("user_skills")
                          .split(",")
                          .map(item => ({ label: item, value: item }))
                      }
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={this.handleSkillsChange}
                      placeholder="Enter your skills"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicBio">
                    <Form.Label>Bio:</Form.Label>
                    <Form.Control
                      type="text"
                      name="bio"
                      placeholder="Tell us something about yourself"
                      onChange={this.handleBioChange}
                      defaultValue={sessionStorage.getItem("user_bio")}
                      required
                    />
                  </Form.Group>

                  <ImageUpload
                    updateImages={this.updateImages}
                    updateImageCheckStatus={this.updateImageCheckStatus}
                    clearPhotos={this.clearPhotos}
                    images={this.state.images}
                  ></ImageUpload>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>

                {fireRedirect && <Redirect to="/employer-profiles" />}
              </Card.Body>
            </Card>
          </Row>
        </Container>
      );
    }
  }
}

UserProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

const welcomeMessage = {
  color: "#FF5903",
  textAlign: "center",
  padding: "10px"
};

export default UserProfile;
