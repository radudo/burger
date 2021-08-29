import "./PostBox.scss";
import { TextField } from "@material-ui/core";
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
