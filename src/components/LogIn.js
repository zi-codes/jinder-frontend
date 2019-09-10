import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class LogIn extends React.Component {
    state = {
        email: null,
        password: null
     };

    handleSubmit = event => {
        event.preventDefault();
        this.props.createSession(this.state);
        this.setState({ email: null });
        this.setState({ password: null });
      };
    
      handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
      };
    

    render() {
        return (
            <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
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
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Group>
             <Button variant="primary" type="submit">
                Submit
             </Button>
             </Form>
            </div>

        )
    }
}

LogIn.propTypes = {
    createSession: PropTypes.func.isRequired
  };

export default LogIn;
