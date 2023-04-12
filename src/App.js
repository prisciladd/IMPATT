import React from "react";
import { withRouter } from "react-router-dom";
import "../src/content.css";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import User from "./components/User";
import Home from "./components/Home";

function App(props) {
  return (
    <div className="app">
      <Header />
      <User />
      <Menu />
      <div className="main">
        <div className="content" id="content">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
