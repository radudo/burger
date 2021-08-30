import React from "react";
import "./Box.scss";
import { UploadImages } from "../UploadImages/UploadImages";
import { TextField } from "@material-ui/core";

const Box = () => (
  <div className="Box" data-testid="Box">
    <div className="Box--wrapper">
      <h3 className="Box--wrapper__title" >How was your burger?</h3>
      <TextField  id="outlined-basic" className="Box--wrapper__title-text" label="Write something..." variant="outlined"/>
      <UploadImages />
    </div>
  </div>
);

export default Box;
