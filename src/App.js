import React from "react";
import { withRouter } from "react-router-dom";
import "../src/content.css";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import User from "./components/User";
import Home from "./components/Home";
import Global from "./styles/global";
import { Container } from "../src/pages/Home/HomeStyles";

//vamos fzr nossa aplicacao em em cima de um card<<<<<<
import Card from "@material-ui/core/Card";
//o proprio card MUI tem actions
import CardActions from "@material-ui/core/CardActions";
//area de conteudo do nosso card
import CardContent from "@material-ui/core/CardContent";
//navegacao
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
//icones
import FavoriteIcon from "@material-ui/icons/Favorite";
import SchoolIcon from "@material-ui/icons/School";
import FaceIcon from "@material-ui/icons/Face";

import "./App.css";

function App(props) {
  return (
    // <>
    //   <Global />
    //   <User />
    //   <Header />
    //   <Container>
    //     <Menu />
    //     <div className="main">
    //       <div className="content" id="content">
    //         {props.children}
    //       </div>
    //     </div>
    //   </Container>
    // </>
    <div className="App">
      <div className="App-body">
        <Card
          style={{
            flex: 1,
            marginTop: "0.4%", //  efeito bordas
            display: "flex",
            marginBottom: "0.4%", //  efeito bordas
            flexDirection: "column",
            width: "100%",
            maxWidth: 1700, //nao passa 600pixel
          }}
        >
          <Header />
          <Menu />
          <CardContent
            style={{ flex: 1, display: "flex", flexDirection: "column" }}
          >
            {props.children}
          </CardContent>

          {/* <CardActions style={{ display: "flex" }}>
            <BottomNavigation style={{ flex: 1 }} showLabels>
              <BottomNavigationAction label="Match" icon={<FavoriteIcon />} />
              <BottomNavigationAction
                label="Estudantes"
                icon={<SchoolIcon />}
              />
              <BottomNavigationAction label="Perfil" icon={<FaceIcon />} />
            </BottomNavigation>
          </CardActions> */}
        </Card>
      </div>
    </div>
  );
}

export default withRouter(App);
