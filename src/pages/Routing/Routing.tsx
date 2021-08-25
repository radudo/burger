import React from "react";
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
          <li className="logo">
            <Link to="/">Burgers TM</Link>
          </li>
          <li className="item">
            <Link to="/">Feed</Link>
          </li>
          <li className="item">
            <Link to="/home">Home</Link>
          </li>
        </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <FeedPage />
          </Route>
          <Route path="/feed-page">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
}

