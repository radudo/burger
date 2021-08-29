import Box from "../../components/Box/Box";
import React, { Component } from "react";
import "./FeedPage.scss";
import { IProps } from "../../models/IProps";

interface IState {
  showHide?: boolean;
}
export default class FeedPage extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      showHide: false
    };

    this.displayUpload = this.displayUpload.bind(this);
  }
  displayUpload() {
    this.setState((previousState, props) => ({
      showHide: !previousState.showHide,
    }));
    //On Off Toggle for upload form
    console.log(this.state.showHide);
  }
  render() {
    return (
      <div className="feed-wrapper">
        <div className="upload-wrapper">
          <div onClick={() => this.displayUpload()} className="upload-button">
            <div className="icon">+</div>
          </div>
        </div>
        {this.state.showHide ? <Box /> : null}
      </div>
    );
  }
}
