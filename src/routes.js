import React from 'react';
import { Router, Route } from 'react-router';

// import App from './App';
import About from './pages/About/About';
import Process from './pages/Process/Process';
import Landing from './pages/Landing/Landing';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/about" component={About} />
    <Route path="/process" component={Process} />
    <Route path="*" component={Landing} />
  </Router>
)

export default Routes
