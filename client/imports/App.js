import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import Blaze from 'meteor/gadicc:blaze-react-component';

// import Alert from 'react-s-alert';

import Login from './Login';
import AdminMain from './AdminMain';
import Authenticated from './Authenticated';
import Landing from './Landing';
import Notfound from './Notfound';
import ClientMain from './ClientComponents/ClientMain';

const App = props => (
  <Router>
    <Switch>
      {/* AdminMain needs blacket */}
      {/* if not use exact, every path goes to /(root)  */}
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Authenticated path="/admin" component={AdminMain} adminOnly {...props} />
      <Authenticated path="/client" component={ClientMain} adminOnly={false} {...props} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

export default withTracker((props) => {
  const loggingIn = Meteor.loggingIn();
  const user = Meteor.user();
  const userId = Meteor.userId();
  const loading = Roles.subscription ? !Roles.subscription.ready() : true;

  return {
    loggingIn,
    loading,
    user,
    userId,
    authenticated: !loggingIn && !!userId,
    roles: !loading && Roles.getRolesForUser(userId),
  };
})(App);

