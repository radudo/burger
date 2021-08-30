import Box from "../../components/Box/Box";
import PostDialog from "../../components/PostDialog/PostDialog";
import React, { Component } from "react";
import "./FeedPage.scss";
import { GoPlus } from "react-icons/go";
import { IProps } from "../../models/IProps";
import * as data from '../../assets/data/burgers.json';
import {BPost} from '../../models/BPost'

interface IState {
  showHide?: boolean;
  burgers: BPost[];
}
export default class FeedPage extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      showHide: false,
      burgers: data as BPost[],
    };

    this.displayUpload = this.displayUpload.bind(this);
    console.log(this.state.burgers);
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
            <div className="icon"><GoPlus/></div>
          </div>
        </div>
        {this.state.showHide ? <Box /> : null}
        <PostDialog dataParentToChild = {data}/>

      </div>
    );
  }
}
