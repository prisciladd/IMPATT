import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import NotasFaltas from "./components/NotasFaltas";
import Boletim from "./components/Boletim";
import ModalBoletim from "./components/ModalBoletim";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <App>
          <Route exact path="/" component={Home} />
          <Route path="/NotasFaltas" component={NotasFaltas} />
          <Route path="/Boletim" component={Boletim} />
          <Route path="/ModalBoletim" component={ModalBoletim} />
          {/* Rota para o modal */}
        </App>
      </Switch>
    </Router>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
