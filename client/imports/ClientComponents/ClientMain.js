import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import ClientSubmenu from '../ClientComponents/ClientSubmenu';
import Appointments from '../ClientComponents/Appointments';
import Notfound from '../Notfound';


class ClientMain extends Component {
  render(props) {
    return (
      <div>
        <Header {...props} />
        <div className="container-fluid">
          <ClientSubmenu {...props} />
          <Switch>
            <Route exact path="/client" component={Appointments} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default ClientMain;
