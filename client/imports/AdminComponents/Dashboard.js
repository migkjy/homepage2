import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { DepartmentsCollection } from '../../../imports/api/DepartmentsCollection';
import { StaffCollection } from '../../../imports/api/StaffCollection';

class Dashboard extends Component {
  render() {
    if (this.props.loaing) { return (<div role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">loading</div>); }
    return (
      <div role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
        <h1>Dashboard</h1>
        <section className="row text-center placeholders">
          <div className="col-6 col-sm-3 placeholder">
            <Link to="/admin/clients">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width={200} height={200} className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
              <h4 style={{ color: '#000' }}>Clients</h4>
              <div className="text-muted">{this.props.clients.length}</div>
            </Link>
          </div>
          <div className="col-6 col-sm-3 placeholder">
            <Link to="/admin/departments">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width={200} height={200} className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
              <h4 style={{ color: '#000' }}>Departments</h4>
              <span className="text-muted">{this.props.departments.length}</span>
            </Link>
          </div>
          <div className="col-6 col-sm-3 placeholder">
            <Link to="/admin/staff">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width={200} height={200} className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
              <h4 style={{ color: '#000' }}>Staff</h4>
              <span className="text-muted">{this.props.staff.length}</span>
            </Link>
          </div>
          <div className="col-6 col-sm-3 placeholder">
            <Link to="/admin/users">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width={200} height={200} className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
              <h4 style={{ color: '#000' }}>Users</h4>
              <span className="text-muted">{this.props.users.length}</span>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default withTracker((props) => {
  const usersSubscription = Meteor.subscribe('allUsers');
  const rolesSubscription = Meteor.subscribe('allRoles');
  const clientsSubscription = Meteor.subscribe('allClients');
  const staffSubscription = Meteor.subscribe('StaffCollection');
  const departmentsSubscription = Meteor.subscribe('DepartmentsCollection');
  const notAllReady = !(
    usersSubscription.ready() &&
    rolesSubscription.ready() &&
    clientsSubscription.ready() &&
    staffSubscription.ready() &&
    departmentsSubscription.ready()
  );

  return {
    loading: notAllReady,
    clients: Roles.getUsersInRole('client').fetch(),
    users: Meteor.users.find().fetch(),
    staff: StaffCollection.find().fetch(),
    departments: DepartmentsCollection.find().fetch(),
    ...props,
  };
})(Dashboard);
