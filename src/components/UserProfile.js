import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class UserProfile extends React.Component {
    state = {

    };

    render() {
        return (
            <div>
        <Form onSubmit={this.handleSubmit}>

          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              onChange={this.handleFirstNameChange}
            />
            
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="test"
              placeholder="Enter you last name"
              onChange={this.handleLastNameChange}
            />
          </Form.Group>

          <Form.Group controlId="formUserEmail">
            <Form.Label>User Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter you personal email"
              onChange={this.handleUserEmailChange}
            />
            <Form.Text className="text-muted">
              Employers can use this email to contact you.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formUserIndustry">
            <Form.Label>User Industry</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter you preferred industry here"
              onChange={this.handleUserIndustryChange}
            />
          </Form.Group>

          <Form.Group controlId="formUserSkills">
            <Form.Label>User Skills</Form.Label>
            <Form.Control
              type="text"
              placeholder="Select your skills"
              onChange={this.handleUserSkillsChange}
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

export default UserProfile;