import React from "react";
import "./UploadImages.scss";

export class UploadImages extends React.Component<{}, { file: String; imagePreviewUrl: any }> {
  constructor(props: any) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e: any) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e: any) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="upload file user" />;
    } else {
      $imagePreview = (
        <div className="previewText">
          Please select an Image of your juicy burger{" "}
        </div>
      );
    }

    return (
      <div className="previewComponent">
        <div className="imgPreview">{$imagePreview}</div>
        <form className="uploadForm" onSubmit={(e) => this._handleSubmit(e)}>
          <input
            className="submitButton"
            type="file"
            onChange={(e) => this._handleImageChange(e)}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={(e) => this._handleSubmit(e)}
          >
            Upload Image
          </button>
        </form>
      </div>
    );
  }
}
