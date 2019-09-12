import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
// import api from "./secretapikey";
import api from "./publicapikey";
import PropTypes from "prop-types";
import { StageSpinner } from "react-spinners-kit";

const AnyReactComponent = ({ text }) => <h1>{text}</h1>;

class SimpleMap extends Component {
  state = {
    lat: 51.5229,
    lng: 0.0777
  };

  componentDidMount = () => {
    this.getGeolocation();
  };

  getGeolocation = () => {
    let that = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log("in get geolocation the pos is");
        console.log(pos);
        that.setState({ lat: pos.lat });
        that.setState({ lng: pos.lng });
        that.props.findCity(pos);
      });
    } else {
      // Browser doesn't support Geolocation
      console.log("Geolcation not enabled");
    }
  };
  render() {
    let { lat } = this.state;
    let { lng } = this.state;

    return (
      <div
        style={{ height: "200px", width: "100%", padding: "10px 0px 10px 0px" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: api }}
          center={{ lat: lat, lng: lng }}
          defaultZoom={11}
        >
          <AnyReactComponent lat={lat} lng={lng} text="🔥" />
        </GoogleMapReact>
      </div>
    );
  }
}

SimpleMap.propTypes = {
  findCity: PropTypes.func.isRequired
};

export default SimpleMap;
