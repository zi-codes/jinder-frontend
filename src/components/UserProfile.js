import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import Select from "react-select";
import Img from "react-fix-image-orientation";
import { industryOptions } from "../data/IndustryData";
import { skillsOptions } from "../data/SkillsData";
import { Redirect } from "react-router-dom";
import ImageUpload from "./ImageUpload";

// const Checkbox = props => <input type="checkbox" {...props} />;

class UserProfile extends React.Component {
  state = {
    // for routing
    fireRedirect: false,

    //for profile details
    firstName: null,
    surname: null,
    industry: null,
    skills: null,

    // for image upload

    images: []
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createProfile(this.state);
    this.setState({ firstName: null });
    this.setState({ surname: null });
    this.setState({ industry: null });
    this.setState({ skills: null });
    this.setState({ images: [] });
    this.setState({ fireRedirect: true });
  };

  handleNameChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleIndustryChange = event => {
    this.setState({ industry: event.value });
  };

  handleSkillsChange = event => {
    const skills = [];
    event.forEach(skill => {
      skills.push(skill.value);
    });
    this.setState({ skills: skills.join() });
  };

  updateImages = images => {
    this.setState({ images: images });
  };

  //   toggleClearable = () =>
  //     this.setState(state => ({ isClearable: !state.isClearable }));
  //   toggleDisabled = () =>
  //     this.setState(state => ({ isDisabled: !state.isDisabled }));
  //   toggleLoading = () =>
  //     this.setState(state => ({ isLoading: !state.isLoading }));
  //   toggleRtl = () => this.setState(state => ({ isRtl: !state.isRtl }));
  //   toggleSearchable = () =>
  //     this.setState(state => ({ isSearchable: !state.isSearchable }));

  render() {
    const { fireRedirect } = this.state;

    return (
      <div>
        <p style={welcomeMessage}>
          Hey hot stuff. Start courting the market right away by filling in your
          details below...
        </p>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              onChange={this.handleNameChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicSurname">
            <Form.Label>Surname:</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              placeholder="Enter your surname"
              onChange={this.handleNameChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicSkills">
            <Form.Label>Industry:</Form.Label>
            <React.Fragment>
              <Select
                isSingle
                options={industryOptions}
                className="basic-single-select"
                classNamePrefix="select"
                name="industry"
                onChange={this.handleIndustryChange}
                placeholder="Enter your industry"
              />
            </React.Fragment>
          </Form.Group>

          <Form.Group controlId="formBasicSkills">
            <Form.Label>Job Skills:</Form.Label>
            <Select
              isMulti
              name="skills"
              options={skillsOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={this.handleSkillsChange}
              placeholder="Enter your skills"
            />
          </Form.Group>

          <ImageUpload
            updateImages={this.updateImages}
            images={this.state.images}
          ></ImageUpload>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        {fireRedirect && <Redirect to="/profiles" />}
      </div>
    );
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
