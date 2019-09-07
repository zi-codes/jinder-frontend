import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormControl, Card } from "react-bootstrap";

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
      <Card style={{ width: "26rem" }}>
        <Card.Body>
          <Form inline>
            <FormControl
              style={{ width: "18rem" }}
              type="text"
              placeholder="Filter by industry or skill"
              className="mr-sm-2"
              onChange={this.handleChange}
            />
            <Button variant="outline-success">Filter</Button>
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
