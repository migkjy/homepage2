import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';


const Authenticated = ({
  adminOnly, loggingIn, authenticated, component, user, path, ...rest
}) => (
  <Route
    {...rest}
    path={path}
    render={(props) => {
      const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
      if (loggingIn) { return <div />; }

      if (!authenticated) { return <Redirect to="/login" />; }

      if (adminOnly && isAdmin) {
        return (React.createElement(component, {
          ...props, ...rest, user, path, loggingIn, authenticated,
        }));
      }
      if (!adminOnly) {
        return (React.createElement(component, {
          ...props, ...rest, user, path, loggingIn, authenticated,
        }));
      }
      return <Redirect to="/login" />;
    }}
  />
);

export default Authenticated;
