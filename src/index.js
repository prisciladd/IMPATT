import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './components/Home'
import NotasFaltas from './components/NotasFaltas'



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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a functaion
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
