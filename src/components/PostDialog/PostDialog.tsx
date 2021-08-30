import React from "react";
import "./PostDialog.scss";
import { FaLocationArrow, FaHamburger,FaShare } from 'react-icons/fa';
import { BsPersonPlus } from "react-icons/bs";
import profileDefault from "../../assets/img/download.png";
const burgerLink = "https://cdn.vox-cdn.com/thumbor/an4QCXElEmaeZAhN3xf5fK3Xe0Q=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22276249/McPlant_Burger.png";

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
      <img className="crop-center" src={burgerLink} alt="Burger Image" />
    </div>
    <div className="PostBox--contentArea">
      <div className="PostBox--contentArea__wrapper">
        <div className="actions-area">
          <div >
            <FaHamburger title="Like Burger" className="burgerLike"/>
            <FaShare title="Share the Burger" className="shareIcon" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PostDialog;
