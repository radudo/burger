import React from "react";
import "./PostDialog.scss";
import { FaLocationArrow } from 'react-icons/fa';
import profileDefault from "../../assets/img/download.png";
const PostDialog = () => (
  <div className="PostBox" data-testid="PostBox">
    <div className="PostBox--header">
      <div className="PostBox--header__wrapper">
        <div className="user--profile">
          <div className="left">
            <div className="user--profile__picture">
              <img src={profileDefault} alt="user profile avatar" />
            </div>
          </div>
          <div className="right">
            <div className="user--profile__location">
              <FaLocationArrow />  Bones - Aarhus, Denmark
            </div>
            <div className="user--profile__username">@def01bgd</div>
          </div>
        </div>
      </div>
    </div>
    <div className="PostBox--wrapper">
      <h3 className="PostBox--wrapper__title">How was your burger?</h3>
    </div>
  </div>
);

export default PostDialog;
