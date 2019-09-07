import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { industryOptions } from "../data/IndustryData";
import { skillsOptions } from "../data/SkillsData";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// wait to integrate with harry ;)

class Filter extends React.Component {
  state = {
    keyword: ""
  };

  handleChange = event => {
    this.setState({ keyword: event.target.value });
  };
  render() {
    return (
      <div>
        <Form>
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
      </div>
    );
  }
}

export default Filter;
