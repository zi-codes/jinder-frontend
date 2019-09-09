import axios from "axios";
import React from "react";
import api from "../secretapikey";
// import api from "../publicapikey";

class SafeImageChecker extends React.Component {
  state = {
    images: this.props.images,
    naughties: [],
    label: null,
    status: null
  };

  safeImgCheck = image => {
    var reader = new FileReader();

    var that = this;

    reader.addEventListener("load", function(e) {
      let data = e.target.result.split(",")[1];
      that.sendImgToGoogle(data);
    });

    reader.readAsDataURL(image);
  };

  sendImgToGoogle = data => {
    let that = this;

    let body = {
      requests: [
        {
          image: {
            content: data
          },
          features: [
            {
              type: "LABEL_DETECTION",
              maxResults: 1
            },
            {
              type: "SAFE_SEARCH_DETECTION"
            }
          ]
        }
      ]
    };

    let headers = {
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    };

    axios
      .post(
        "https://vision.googleapis.com/v1/images:annotate?key=" + api,
        body,
        headers
      )
      .then(function(response) {
        that.handleResponse(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleResponse = response => {
    let naughties = this.findNaughties(response);
    let label = this.findLabel(response);
    this.setState({ status: "checked" });
    this.setState({ naughties: naughties });
    this.setState({ label: label });
    this.setState({ images: [] });
  };

  findNaughties = response => {
    let possible_naughties = response.data.responses[0].safeSearchAnnotation;
    return Object.entries(possible_naughties).filter(
      entry => entry[1] === "LIKELY" || entry[1] === "VERY_LIKELY"
    );
  };

  findLabel = response => {
    return response.data.responses[0].labelAnnotations[0].description;
  };

  render() {
    const { images } = this.state;
    const { naughties } = this.state;
    const { label } = this.state;
    return (
      <div>
        {images.length > 0 && this.safeImgCheck(images[0])}
        {images.length > 0 && <div> Now checking your images ... </div>}
        {naughties.length > 0 && label && (
          <div>
            Your {label} is way too {naughties[0][0]} for jinder! Try another
            photo.
          </div>
        )}
        {naughties.length === 0 && label && (
          <div>Your {label} is perfect for jinder :)</div>
        )}
      </div>
    );
  }
}

export default SafeImageChecker;
