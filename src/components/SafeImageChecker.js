import axios from "axios";
import React from "react";

console.log(api);
class SafeImageChecker extends React.Component {
  state = {
    images: this.props.images
  };

  componentDidUpdate = () => {
    console.log(this.state.images);
  };

  safeImgCheck = image => {
    console.log("hello!");
    var reader = new FileReader();

    var that = this;

    reader.addEventListener("load", function(e) {
      let data = e.target.result.split(",")[1];
      that.sendImgToGoogle(data);
    });

    reader.readAsDataURL(image);
  };

  sendImgToGoogle = data => {
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

    console.log(body);

    let headers = {
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    };
    axios
      .post(
        "https://vision.googleapis.com/v1/images:annotate?key=KEYTOGOHERE",
        body,
        headers
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { images } = this.state;
    return <div>{images.length > 0 && this.safeImgCheck(images[0])}</div>;
  }
}

export default SafeImageChecker;
