import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import Img from "react-fix-image-orientation";
import safeImgCheck from "./SafeImageChecker";

class ImageUpload extends React.Component {
  state = {
    images: []
  };

  // Image Upload functions

  renderUploadImagesButton = () => {
    return (
      <Form.Control
        name="images"
        type="file"
        ref={field => (this.ImagesField = field)}
        multiple={true}
        accept="image/*"
        onChange={e => this.handleImagesChange(e)}
      ></Form.Control>
    );
  };

  renderSelectedImagesFiles = () => {
    let fileDOMs = this.state.images.map((el, index) => {
      return (
        <li key={index} style={{ listStyle: "none", padding: "10px" }}>
          <div className="photo">
            <Img
              width={250}
              src={el.id ? el.url : URL.createObjectURL(el)}
              style={{ alignSelf: "center" }}
            />
          </div>
        </li>
      );
    });

    return <ul className="selected-images">{fileDOMs}</ul>;
  };

  handleImagesChange(event) {
    let files = this.ImagesField.files;
    console.log(safeImgCheck(files[0]));
    let { images } = this.state;
    for (let i = 0; i < files.length; i++) {
      images.push(files.item(i));
    }

    this.props.updateImages(images);
  }

  render() {
    return (
      <Form.Group controlId="formImages">
        <Form.Label>Profile picture:</Form.Label>
        {this.renderUploadImagesButton()}
        {this.renderSelectedImagesFiles()}
      </Form.Group>
    );
  }
}

ImageUpload.propTypes = {
  updateImages: PropTypes.func.isRequired
};

export default ImageUpload;
