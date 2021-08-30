import React from "react";
import "./Box.scss";
import { UploadImages } from "../UploadImages/UploadImages";
import { TextField } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const Box = () => (
  <div className="Box" data-testid="Box">
    <div className="Box--wrapper">
      <h3 className="Box--wrapper__title">How was your burger?</h3>
      <TextField
        id="outlined-basic"
        className="Box--wrapper__title-text"
        label="Write something..."
        variant="outlined"
      />
      <UploadImages />
      <div className="rating-section">
        <h3 className="Box--wrapper__title">Give it a rating?</h3>
        <Rating size="large" className="rating-stars"  name="half-rating" defaultValue={0} precision={0.5} />
      </div>
    </div>
  </div>
);

export default Box;
