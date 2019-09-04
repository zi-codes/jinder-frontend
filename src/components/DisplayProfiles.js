import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Button from "./Button";
import { render } from "react-dom";
import Swipeable from "react-swipy";

const appStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden"
};

const wrapperStyles = { position: "relative", width: "250px", height: "250px" };
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
};

class DisplayProfiles extends React.Component {
  state = {
    profiles: []
  };

  componentDidMount = () => {
    const that = this;
    fetch("https://jinder-backend.herokuapp.com/api/profiles")
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        that.setState({ profiles: json });
      });
  };

  remove = () =>
    this.setState(({ profiles }) => ({
      profiles: profiles.slice(1, profiles.length)
    }));

  render() {
    const { profiles } = this.state;
    return (
      <div style={appStyles}>
        <div style={wrapperStyles}>
          {profiles.length > 0 && (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({ right, left }) => (
                  <div style={actionsStyles}>
                    <Button onClick={left}>Reject</Button>
                    <Button onClick={right}>Accept</Button>
                  </div>
                )}
                onAfterSwipe={this.remove}
              >
                <Card>
                  {profiles[0].first_name}
                  {profiles[0].last_name}
                </Card>
              </Swipeable>
              {profiles.length > 1 && (
                <Card zIndex={-1}>
                  {profiles[1].first_name}
                  {profiles[1].last_name}
                </Card>
              )}
            </div>
          )}
          {profiles.length <= 1 && <Card zIndex={-2}>No more profiles</Card>}
        </div>
      </div>
    );
  }
}

export default DisplayProfiles;
