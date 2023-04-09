import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './components/Home'
import Header from "./Header"
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
  </React.StrictMode>
);