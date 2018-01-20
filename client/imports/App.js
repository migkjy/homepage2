import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// import Alert from 'react-s-alert';

import Notfound from './Notfound';
import Index from './Index';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

export default App;
