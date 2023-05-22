import React from "react";
import { withRouter } from "react-router-dom";
import "../src/content.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import User from "./components/User";
import Global from "./styles/global";
import { Container } from "./styles/BoxStyles";

function App(props) {
  return (
    <>
      <Global />
      <User />
      <Header /> 
      <Container>
        <Menu />
        <div className="main">
          <div className="content" id="content">
            {props.children}
          </div>
        </div>
      </Container>
    </>
  );
}

export default withRouter(App);
