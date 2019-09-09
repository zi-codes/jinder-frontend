import React from "react";
import PropTypes from "prop-types";
import axiosClient from "../axiosClient";
import Card from "./Card";
import Button from "./Button";
import { render } from "react-dom";
import Swipeable from "react-swipy";
import DefaultPicture from "./default.jpeg";
import Filter from "./Filter";
import globalUrl from "../globalUrl";

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

const imgStyle = {
  width: "250px",
  height: "200px"
};

const wrapperStyles = { position: "relative", width: "250px", height: "350px" };
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
    axiosClient
      .get("/api/profiles")
      .then(response => this.setState({ profiles: response.data.reverse() }));
  };

  remove = () =>
    this.setState(({ profiles }) => ({
      profiles: profiles.slice(1, profiles.length)
    }));

  showImg = (profileIndex, profiles) => {
    if (profiles[profileIndex].image_photos[0]) {
      return globalUrl + profiles[profileIndex].image_photos[0].url;
    } else {
      return DefaultPicture;
    }
  };

  render() {
    const { profiles } = this.state;
    return (
      <div>
        <Filter></Filter>
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
                    <table>
                      <tr>
                        <img style={imgStyle} src={this.showImg(0, profiles)} />
                      </tr>
                      <tr>
                        {profiles[0].first_name} {profiles[0].last_name}
                        <br />
                        Industry: {profiles[0].industry}
                        <br />
                        Skills: {profiles[0].skills}
                      </tr>
                    </table>
                  </Card>
                </Swipeable>
                {profiles.length > 1 && (
                  <Card zIndex={-1}>
                    <table>
                      <tr>
                        <img style={imgStyle} src={this.showImg(1, profiles)} />
                      </tr>
                      <tr>
                        {profiles[1].first_name} {profiles[1].last_name}
                        <br />
                        Industry: {profiles[1].industry}
                        <br />
                        Skills: {profiles[1].skills}
                      </tr>
                    </table>
                  </Card>
                )}
              </div>
            )}
            {profiles.length <= 1 && <Card zIndex={-2}>No more profiles</Card>}
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayProfiles;
