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
      if (loggingIn) { return <div />; }

      if (!authenticated) { return <Redirect to="/login" />; }

      return (React.createElement(component, {
        ...props, ...rest, user, path, loggingIn, authenticated,
      }));
    }}
  />
);

export default Authenticated;
