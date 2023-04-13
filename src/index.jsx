import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import {App} from './App';
import { BrowserRouter} from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./static/all.min.css"
import { routes } from "./routes/routes";
////////////////////////////
 const initRoutes = () => <Router>{routes}</Router>;

  const initializedRoutes = initRoutes();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

root.render(
  initializedRoutes
);