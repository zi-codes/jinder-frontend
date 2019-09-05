import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import { industryOptions } from "../data/IndustryData";
import { skillsOptions } from "../data/SkillsData";
import { Redirect } from "react-router-dom";

// const Checkbox = props => <input type="checkbox" {...props} />;

//   state = {
//   isClearable: boolean,
//   isDisabled: boolean,
//   isLoading: boolean,
//   isRtl: boolean,
//   isSearchable: boolean,
// };

class UserProfile extends React.Component {
  state = {
    fireRedirect: false,
    firstName: null,
    surname: null,
    industry: null,
    skills: null,
    // isClearable: true,
    // isDisabled: false,
    // isLoading: false,
    // isRtl: false,
    // isSearchable: true,
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createProfile(this.state)
    this.setState({ firstName: null })
    this.setState({ surname: null })
    this.setState({ industry: null })
    this.setState({ skills: null })
    this.setState({ fireRedirect: true })
  }

  handleNameChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleIndustryChange = event => {
    this.setState({ industry: event.value })
  }

  handleSkillsChange = event => {
    const skills = [] 
    event.forEach(skill => {
      skills.push(skill.value)
    });
    this.setState({ skills: skills.join() });
  }

  toggleClearable = () =>
    this.setState(state => ({ isClearable: !state.isClearable }));
  toggleDisabled = () =>
    this.setState(state => ({ isDisabled: !state.isDisabled }));
  toggleLoading = () =>
    this.setState(state => ({ isLoading: !state.isLoading }));
  toggleRtl = () => this.setState(state => ({ isRtl: !state.isRtl }));
  toggleSearchable = () =>
    this.setState(state => ({ isSearchable: !state.isSearchable }));

  render() {

    const { fireRedirect } = this.state;

    // const {
    //   isClearable,
    //   isSearchable,
    //   isDisabled,
    //   isLoading,
    //   isRtl,
    // } = this.state;
    
    return (
      <div>
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

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {fireRedirect && ( <Redirect to='/'/> )} 
      </div>
    )
  }
}

UserProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};


export default UserProfile;