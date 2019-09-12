import React from "react";
import { Form, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import Img from "react-fix-image-orientation";
import SafeImageChecker from "./SafeImageChecker";

class ImageUpload extends React.Component {
  state = {
    images: this.props.images
  };
  renderUploadImagesButton = () => {
    return (
      <div style={{ paddingBottom: "10px" }}>
        <Form.Control
          name="images"
          type="file"
          ref={field => (this.ImagesField = field)}
          multiple={true}
          accept="image/*"
          onChange={e => this.handleImagesChange(e)}
        ></Form.Control>
      </div>
    );
  };

  renderSelectedImagesFiles = () => {
    let fileDOMs = this.state.images.map((el, index) => {
      return (
        <li key={index} style={{ listStyle: "none", alignSelf: "center" }}>
          <div className="photo">
            <Card.Img
              src={el.id ? el.url : URL.createObjectURL(el)}
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "0 5"
              }}
            />
          </div>
        </li>
      );
    });

    return (
      <ul style={{ margin: "0px", padding: "0px" }} className="selected-images">
        {fileDOMs}
      </ul>
    );
  };

  handleImagesChange(event) {
    this.props.updateImageCheckStatus(true);
    let files = this.ImagesField.files;
    let { images } = this.state;
    for (let i = 0; i < files.length; i++) {
      images.push(files.item(i));
    }
    this.props.updateImages(images);
    this.props.updateImageCheckStatus(true);
  }

  clearPhotos = () => {
    this.props.clearPhotos();
  };

  completeImageCheck = () => {
    this.props.updateImageCheckStatus(false);
  };

  render() {
    let noFileUploaded;
    if (this.state.images.length === 0) {
      noFileUploaded = (
        <span>
          🤖 JinderBot will check that you are uploading appropriate material
        </span>
      );
    }
    return (
      <>
        <Form.Group controlId="formImages">
          <Form.Label>Profile picture</Form.Label>
          {this.renderUploadImagesButton()}
          <Card>
            {this.renderSelectedImagesFiles()}
            <Card.Footer>
              {noFileUploaded}
              <SafeImageChecker
                images={this.state.images}
                clearPhotos={this.clearPhotos}
                completeImageCheck={this.completeImageCheck}
              ></SafeImageChecker>
            </Card.Footer>
          </Card>
        </Form.Group>
      </>
    );
  }
}

ImageUpload.propTypes = {
  updateImages: PropTypes.func.isRequired,
  clearPhotos: PropTypes.func.isRequired,
  updateImageCheckStatus: PropTypes.func.isRequired
};

export default ImageUpload;
