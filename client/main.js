import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './imports/App';

Meteor.startup(() => {
  ReactDOM.render(
    <App />,
    document.getElementById('render-target'),
  );
});
