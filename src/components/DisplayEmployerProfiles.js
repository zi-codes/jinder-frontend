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
import {
  appStyles,
  imgStyle,
  wrapperStyles,
  actionsStyles
} from "./swipeStyling";

class DisplayEmployerProfiles extends React.Component {
  state = {
    profiles: []
  };

  componentDidMount = () => {
    axiosClient
      .get("/employers")
      .then(response => this.setState({ profiles: response.data.reverse() }));
  };

  print = dir => {
    console.log(dir);
  };

  remove = () => {
    this.setState(({ profiles }) => ({
      profiles: profiles.slice(1, profiles.length)
    }));
  };

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
                  onSwipe={dir => this.print(dir)}
                  onAfterSwipe={this.remove}
                >
                  <Card>
                    <div>
                      <img style={imgStyle} src={this.showImg(0, profiles)} />
                    </div>
                    <div>
                      {profiles[0].first_name} {profiles[0].last_name}
                      <br />
                      Bio: {profiles[0].bio}
                      <br />
                      Website: {profiles[0].company_url}
                    </div>
                  </Card>
                </Swipeable>
                {profiles.length > 1 && (
                  <Card zIndex={-1}>
                    <div>
                      <img style={imgStyle} src={this.showImg(1, profiles)} />
                    </div>
                    <div>
                      {profiles[1].first_name} {profiles[1].last_name}
                      <br />
                      Bio: {profiles[1].bio}
                      <br />
                      Website: {profiles[1].company_url}
                    </div>
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

export default DisplayEmployerProfiles;
