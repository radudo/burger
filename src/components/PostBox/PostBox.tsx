import React, {useState} from "react";
import "./PostBox.scss";
import { UploadImages } from "../UploadImages/UploadImages";
import { TextField } from "@material-ui/core";
interface Files {
  trfaget: null
}
const PostBox = () => {

  return (
    <form noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        className="PostBox"
        label="Write something..."
        variant="outlined"
      />
    </form>
  );
};

export default PostBox;
