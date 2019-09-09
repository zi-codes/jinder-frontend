import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Redirect } from "react-router-dom";

class EmployerSignUp extends React.Component {
  state = {
    fireRedirect: false,
    email: null,
    password: null,
    passwordConfirmation: null
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createEmployer(this.state);
    this.setState({ email: null });
    this.setState({ password: null });
    this.setState({ passwordConfirmation: null });
    this.setState({ fireRedirect: true })
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }
  
  render() {

    const { fireRedirect } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else ;)
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirmation">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              name="passwordConfirmation"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {fireRedirect && ( <Redirect to="/profile"/> )} 
      </div>
    );
  }
}

EmployerSignUp.propTypes = {
  createEmployer: PropTypes.func.isRequired
};

export default EmployerSignUp;
