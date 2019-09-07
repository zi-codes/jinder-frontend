import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { industryOptions } from "../data/IndustryData";
import { skillsOptions } from "../data/SkillsData";
import { Button, Form, FormControl } from "react-bootstrap";

// wait to integrate with harry ;)

class Filter extends React.Component {
  state = {
    keywords: ""
  };

  handleChange = event => {
    let value = event.target.value;
    let keywords = value.split(" ").map(keyword => keyword.toLowerCase());
    this.setState({ keywords: keywords }, () => {
      this.props.filterCards(this.state.keywords);
    });
  };

  render() {
    return (
      <div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Filter by industry or skill"
            className="mr-sm-2"
            onChange={this.handleChange}
          />
          <Button variant="outline-success">Filter</Button>
        </Form>
      </div>
    );
  }
}

Filter.propTypes = {
  filterCards: PropTypes.func.isRequired
};

export default Filter;
