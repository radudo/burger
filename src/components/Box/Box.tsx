import React from "react";
import "./Box.scss";
import PostBox from '../PostBox/PostBox'
import { UploadImages } from "../UploadImages/UploadImages";
const Box = () => (
  <div className="Box" data-testid="Box">
    <div className="Box--wrapper">
      <h3 className="Box--wrapper__title" >How was your burger?</h3>
      <PostBox />
      <UploadImages />
    </div>
  </div>
);

export default Box;
