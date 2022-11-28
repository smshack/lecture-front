import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import RouterApp from './containers/RouterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <RouterApp />
  </Router>
);

