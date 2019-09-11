import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { industryOptions } from "../data/IndustryData";
import { skillsOptions } from "../data/SkillsData";
import { Button, Form, FormControl, Card } from "react-bootstrap";

class Filter extends React.Component {
  state = {
    keywords: ""
  };

  handleChange = keywords => {
    let keywordArray = keywords
      .split(" ")
      .map(keyword => keyword.toLowerCase());

    this.props.filterCards(keywordArray);
  };

  handleIndustryChange = event => {
    this.handleChange(event.value);
  };

  handleSkillsChange = event => {
    const skills = [];
    if (event) {
      event.forEach(skill => {
        skills.push(skill.value.toLowerCase());
      });
      this.props.filterCards(skills);
    }
  };

  render() {
    return (
      <Card style={{ width: "26rem", marginTop: "2em" }}>
        <Card.Body>
          <Form>
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
