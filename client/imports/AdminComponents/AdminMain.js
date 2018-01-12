import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserStatus } from 'meteor/mizzao:user-status';
import $ from 'jquery';

import Header from '../Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Notfound from '../Notfound';
import Staff from './Staff';
import Departments from './Departments';
import Positions from './Positions';
import Users from './Users';
import ClientsCard from './ClientsCard';
import Clients from './Clients';

export default class AdminMain extends Component {
  componentDidMount() {
    UserStatus.startMonitor({
      threshold: 30000,
      idleOnBlur: true,
    });

    $.fn.extend({
      animateCss(animationName, callback) {
        const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass(`animated ${animationName}`).one(animationEnd, function () {
          $(this).removeClass(`animated ${animationName}`);
          if (callback) {
            callback();
          }
        });
        return this;
      },
    });
  }
  componentWillUnmount() {
    UserStatus.stopMonitor();
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Switch>
              <Route exact path="/admin" component={Dashboard} />
              <Route exact path="/admin/staff" component={Staff} />
              <Route exact path="/admin/departments" component={Departments} />
              <Route exact path="/admin/positions" component={Positions} />
              <Route exact path="/admin/users" component={Users} />
              {/* exact needed to be removed, for /admin/clients/:username */}
              <Route path="/admin/clients" component={Clients} />
              <Route exact path="/admin/clientscards" component={ClientsCard} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

