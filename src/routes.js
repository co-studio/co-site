import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import About from './pages/About/About';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/about" component={About} />
    <Route path="*" component={App} />
  </Router>
)

export default Routes
