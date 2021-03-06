import React from "react";
import "./PostDialog.scss";
import {
  FaLocationArrow,
  FaHamburger,
  FaShare,
  FaRegBookmark,
} from "react-icons/fa";
import { BsPersonPlus } from "react-icons/bs";
import profileDefault from "../../assets/img/download.png";
import { AiFillStar } from "react-icons/ai";
import { BPost } from "../../models/BPost";


const PostDialog = ({id,user, picture, likes, rating, description, location, liked }: BPost) => {

  const handlLike = () => {
    liked = !liked
  };
  return (
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
                  <FaLocationArrow /> {location}
                </div>
                <div className="user--profile__username">@{user}</div>
              </div>
            </div>
            <div className="righside-wrapper">
              <div className="follow-box">
                <div className="follow-box__icon">
                  <BsPersonPlus className="icon" />
                </div>
                <div className="follow-box__text">Follow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="PostBox--imageWrapper">
        <img className="crop-center" src={picture} alt="Burger Upload" />
      </div>
      <div className="PostBox--contentArea">
        <div className="PostBox--contentArea__wrapper">
          <div className="actions-area">
            <div className="leftArea--wrapper">
              <FaHamburger
                title="Like Burger"
             onClick={() => handlLike()}
                          style={{
                            color: { liked } ? "black" : "red",
                          }} 
                className="burgerLike"
              />
              <div className="votesDescription">
                <div className="likes">
                  Loved by <b>{likes} other..</b>
                </div>
                <div className="userHeadline">{description}</div>
              </div>
            </div>
            <div>
              <FaShare title="Share the Burger" className="shareIcon" />
              <FaRegBookmark
                title="Save in your favourites"
                className="bookMark"
              />
            </div>
          </div>
          <div className="rating-zone">
            <div className="rating-text">
              <span className="bold">Rating:</span> {rating}/5 <AiFillStar />
            </div>
          </div>
        </div>
      </div>
      <div className="PostBox--commentArea">
        <div className="comment-box">
          <hr />
          <div className="leaveComment">
            Let @{user} know what you think of his burger...
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDialog;
