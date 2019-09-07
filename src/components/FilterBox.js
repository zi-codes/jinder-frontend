import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormControl } from "react-bootstrap";

// wait to integrate with harry ;)

class FilterBox extends React.Component {
  handleChange = event => {
    let value = event.target.value;
    let keyword = value.trim().toLowerCase();
    this.props.addKeyword(keyword);
  };

  handleSubmit = event => {
    this.props.addBox();
  };

  render() {
    return (
      <div>
        <Form inline onSubmit={this.handleSubmit}>
          <FormControl
            type="text"
            placeholder="Filter by industry or skill"
            className="mr-sm-2"
            onChange={this.handleChange}
          />
          <Button variant="outline-success">+</Button>
        </Form>
      </div>
    );
  }
}

FilterBox.propTypes = {
  addKeyword: PropTypes.func.isRequired,
  addBox: PropTypes.func.isRequired
};

export default FilterBox;
