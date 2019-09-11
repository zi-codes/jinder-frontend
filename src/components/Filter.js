import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { personalityTraits } from "../data/PersonalityTraitsData";
import { industryOptions } from "../data/IndustryData";
import { skillsOptions } from "../data/SkillsData";
import { Button, Form, FormControl, Card } from "react-bootstrap";
import axiosClient from "../axiosClient";

class Filter extends React.Component {
  state = {
    location: [],
    industry: [],
    skills: [],
    traits: []
  };

  handleChange = () => {
    let megaArray = this.state.location
      .concat(this.state.industry)
      .concat(this.state.skills)
      .concat(this.state.traits);
    let keywordArray = megaArray.map(keyword => keyword.toLowerCase());
    console.log(keywordArray);
    this.props.filterCards(keywordArray);
  };

  handleLocationChange = event => {
    this.setState({ location: [event.target.value] }, () => {
      this.handleChange();
    });
  };

  handleIndustryChange = event => {
    this.setState({ industry: [event.value] }, () => {
      this.handleChange();
    });
  };

  handleSkillsChange = event => {
    const skills = [];
    if (event) {
      event.forEach(skill => {
        skills.push(skill.value.toLowerCase());
      });
    }
    this.setState({ skills: skills }, () => {
      this.handleChange();
    });
  };

  handlePersonalityChange = event => {
    const traits = [];

    if (event) {
      event.forEach(trait => {
        traits.push(trait.label.toLowerCase());
      });
    }
    this.setState({ traits: traits }, () => {
      this.handleChange();
    });
  };

  render() {
    return (
      <Card style={{ width: "26rem", marginTop: "2em" }}>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicLocation">
              <React.Fragment>
                <Form.Control
                  name="location"
                  onChange={this.handleLocationChange}
                  defaultValue={this.props.defaultLocation}
                />
              </React.Fragment>
            </Form.Group>
            <Form.Group controlId="formBasicIndustry">
              <React.Fragment>
                <Select
                  isSingle
                  options={industryOptions}
                  className="basic-single-select"
                  classNamePrefix="select"
                  name="industry"
                  onChange={this.handleIndustryChange}
                  placeholder="Filter industry"
                />
              </React.Fragment>
            </Form.Group>

            <Form.Group controlId="formBasicSkills">
              <Select
                isMulti
                name="skills"
                options={skillsOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleSkillsChange}
                placeholder="Filter by skills"
              />
            </Form.Group>

            <Form.Group controlId="formBasicSkills">
              <Select
                isMulti
                name="personalityTraits"
                options={personalityTraits.map(trait => ({
                  value: trait.label,
                  label: trait.value
                }))}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handlePersonalityChange}
                placeholder="Filter by personality traits"
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

Filter.propTypes = {
  filterCards: PropTypes.func.isRequired
};

export default Filter;
