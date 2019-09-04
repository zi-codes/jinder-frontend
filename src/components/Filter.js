import React from "react";
import PropTypes from "prop-types";
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
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Filter by skill</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter skill"
              onChange={this.handleChange}
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
