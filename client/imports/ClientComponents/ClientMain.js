import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserStatus } from 'meteor/mizzao:user-status';

import Header from '../Header';
import ClientSubmenu from '../ClientComponents/ClientSubmenu';
import Appointments from '../ClientComponents/Appointments';
import Notfound from '../Notfound';


class ClientMain extends Component {
  componentDidMount() {
    UserStatus.startMonitor({
      threshold: 30000,
      idleOnBlur: true,
    });
  }
  componentWillUnmount() {
    UserStatus.stopMonitor();
  }
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="container-fluid">
          <ClientSubmenu {...this.props} />
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
