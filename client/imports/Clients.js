import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllClients from './AllClients';
import SingleClient from './SingleClient';

const Clients = () => (
  <Switch>
    <Route exact path="/admin/clients" component={AllClients} />
    <Route exact path="/admin/clients/:username" component={SingleClient} />
  </Switch>
);

export default Clients;
