import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './components/Home';
import { A2HSProvider } from  'react-a2hs';
import Header from "./Header";
import NotasFaltas from './components/NotasFaltas';
import User from './User';
import Content from './Content';
import Menu from './Menu';


let deferredPrompt;
const addBtn = document.querySelector(".add-button");
addBtn.style.display = "none";

  window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = "block";

  addBtn.addEventListener("click", (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = "none";
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/notas-faltas" component={NotasFaltas}/>
                </Switch>
            </App>
        </Router> 
        <Header />
        <User/>
        <Menu />
        <Content />
        <A2HSProvider title="IMPATT" position="top-right" />
  </React.StrictMode>
);