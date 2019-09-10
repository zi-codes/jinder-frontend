import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const NoMatches = props => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Card style={{ width: "26rem", marginTop: "2em" }}>
          <Card.Body>
            <div>
              <h3>You have no matches yet 😔</h3>
              <h5>Consider being less fussy?</h5>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default NoMatches;
