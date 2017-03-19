import React from 'react';
import { Router, Route } from 'react-router';

// import App from './App';
import About from './pages/About/About';
import Process from './pages/Process/Process';
import Landing from './pages/Landing/Landing';
// import Bots from './pages/Bots/Bots';
import Contact from './pages/Contact/Contact';

const Routes = (props) => (
  <Router {...props} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/process" component={Process} />
    {/* <Route path="/bots" component={Bots} /> */}
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="*" component={Landing} />
  </Router>
)

export default Routes
