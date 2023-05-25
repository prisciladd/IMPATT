import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";
import NotasFaltas from "./components/NotasFaltas";
import Boletim from "./components/Boletim";
import ModalBoletim from "./components/ModalBoletim";
import VagasEstagio from "./components/VagasEstagio";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./App";
import Horario from "./components/Horario";
import Login from "./components/Login";
//inicia firebase
import "./firebaseConfig";
//responsavel pelo tost oferecer instalacao app
import InstallButton from "./components/InstallButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InstallButton />
    <Router>
      <Switch>
        <App>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/NotasFaltas" component={NotasFaltas} />
          <Route path="/Boletim" component={Boletim} />
          <Route path="/ModalBoletim" component={ModalBoletim} />
          <Route path="/VagasEstagio" component={VagasEstagio} />
          <Route path="/Horario" component={Horario} />
          {/* Rota para o modal */}
        </App>
      </Switch>
    </Router>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
