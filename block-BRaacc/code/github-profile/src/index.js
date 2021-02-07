import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Follower from "./component/Follower";
import Following from "./component/Following";
import Header from "./component/Header";
import Profile from "./component/Profile";
import reportWebVitals from "./reportWebVitals";
import Repo from "./component/Repo";
import UserInput from "./component/UserInput";
import Search from "./component/Search";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Header />
      <div className="profile">
        <Route path="/users/:username" component={Profile}></Route>
      </div>
      <switch>
        <Route path="/users/:username/repos" component={Repo} exact></Route>
        <Route
          path="/users/:username/followers"
          component={Follower}
          exact
        ></Route>
        <Route
          path="/users/:username/following"
          exact
          component={Following}
        ></Route>
      </switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
