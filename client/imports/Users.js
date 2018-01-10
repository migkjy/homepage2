import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import UsersCreate from './UsersCreate';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreatingUsers: false,
    };
    this.toggleCreateState = this.toggleCreateState.bind(this);
  }
  toggleCreateState() {
    const toggle = !this.state.isCreatingUsers;
    this.setState({ isCreatingUsers: toggle });
  }
  renderUsersTable() {
    const users = this.props.users;
    return users.map((user, index) => (
      <tr key={user._id}>
        <th scope="row">{index + 1}</th>
        <td>{user.profile.first_name}</td>
        <td>{user.profile.last_name}</td>
        <td>{user.roles.map((role, index) => {
          <span key={index}><span className="badge badge-info">{role}</span>&nbsp;</span>;
        })}
        </td>
      </tr>
    ));
  }
  renderCreateUsersArea() {
    if (!this.state.isCreatingUsers) {
      return (
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            this.setState({ isCreatingUsers: true });
          }}
        >Add department <i className="fa fa-plus" />
        </button>
      );
    }
    return <UsersCreate handler={this.toggleCreateState} roles={this.props.roles} />;
  }
  render() {
    if (!this.props.loading) {
      return (
        <div role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
          <h1>Users</h1>
          <nav aria-label="breadcrumb" role="navigation">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Users</li>
              <li className="breadcrumb-item" aria-current="page">Staff</li>
            </ol>
          </nav>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {this.renderUsersTable()}
            </tbody>
          </table>
          {this.renderCreateUsersArea()}
        </div>
      );
    }
    return (
      <div className="col-sm-9 ml-sm-auto col-md-10 pt-3">
        <span><i className="fa fa-spin" /> Loading</span>
      </div>
    );
  }
}

export default withTracker((props) => {
  const usersSubscription = Meteor.subscribe('allUsers');
  const rolesSubscription = Meteor.subscribe('allRoles');
  const allReady = usersSubscription.ready() && rolesSubscription.ready();
  const loading = usersSubscription ? !allReady : true;
  return {
    loading,
    users: Meteor.users.find().fetch(),
    roles: Meteor.roles.find().fetch(),
  };
})(Users);
