import React from "react";
import UserAvatarDefault from "../../assets/img/download.png";
import "./Routing.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FeedPage from "../FeedPage/FeedPage";
import HomePage from "../HomePage/HomePage";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Routes() {
  return (
    <Router>
      <nav>
        <ul id="menu" className="menu">
          <div className="left-side">
            <li className="logo item">
              <Link to="/">Burgers TM</Link>
            </li>
            <li className="item">
              <Link to="/">Feed</Link>
            </li>
            <li className="item">
              <Link to="/">Find a Restaurant</Link>
            </li>
          </div>
          <div className="right-side">
            <li className="item profile">
              <Link to="/home-page">
                <div className="profile-wrapper">
                  <div className="profile-name item">
                    <div className="name">Your page</div>
                    <div className="user-tag">@use2x02</div>
                  </div>
                  <div className="profile-picture">
                    <img
                      className="profile-avatar"
                      src={UserAvatarDefault}
                      alt="user avatar"
                    />
                  </div>
                </div>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            <FeedPage />
          </Route>
          <Route path="/home-page">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
