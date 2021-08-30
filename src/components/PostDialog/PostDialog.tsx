import React from "react";
import "./PostDialog.scss";
import { FaLocationArrow, FaHamburger } from 'react-icons/fa';
import { BsPersonPlus } from "react-icons/bs";
import burger from '../../assets/img/burger1.jpeg'

import profileDefault from "../../assets/img/download.png";
const PostDialog = () => (
  <div className="PostBox" data-testid="PostBox">
    <div className="PostBox--header">
      <div className="PostBox--header__wrapper">
        <div className="user--profile">
          <div className="leftside-wrapper">
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
          <div className="righside-wrapper">
            <div className="follow-box">
              <div className="follow-box__icon"><BsPersonPlus className="icon"/></div>
              <div className="follow-box__text">Follow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="PostBox--imageWrapper">
      <img className="crop-center" src={burger} alt="" />
    </div>
    <div className="PostBox--contentArea">
      <div className="PostBox--contentArea__wrapper">
        <div className="actions-area">
          <div className="burgerLike">
            <FaHamburger/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PostDialog;
