import React, { Component } from 'react';
import { Creatable } from 'react-select';
import { Meteor } from 'meteor/meteor';
import $ from 'jquery';
import { Bert } from 'meteor/themeteorchef:bert';


import 'react-select/dist/react-select.css';

class UsersCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      clinic: 'MM Dent',
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      roles: [],
    };
    this.handleUsersSubmit = this.handleUsersSubmit.bind(this);
  }
  handleUsersSubmit(e) {
    e.preventDefault();

    if (this.state.password === this.state.confirmPassword) {
      const newUser = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        clinic: this.state.clinic,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        roles: this.state.roles,
      };

      Meteor.call('users.add', newUser, (error, success) => {
        if (error) {
          Bert.alert({
            title: 'Error',
            message: error.reason,
            type: 'danger',
            style: 'growl-top-right',
            icon: 'fa-times',
          });
        } else {
          Bert.alert({
            title: 'User added',
            message: `${newUser.first_name} ${newUser.last_name} has been added to Users!`,
            type: 'success',
            style: 'growl-top-right',
            icon: 'fa-user',
          });
        }
      });
      this.props.handler();
    } else {
      $('#createUserCard').animateCss('shake');
      Bert.alert({
        title: 'Error',
        message: 'Passwords do not match!',
        type: 'danger',
        style: 'growl-top-right',
        icon: 'fa-times',
      });
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Add new user</h4>
              <h6 className="card-subtitle mb-2 text-muted">Please fill in the form and click Save</h6>
              <form onSubmit={this.handleUsersSubmit}>
                <div className="row">
                  {this.state.username}, {this.state.roles}
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>First name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.first_name}
                        onChange={(e) => { e.preventDefault(); this.setState({ first_name: e.target.value }); }}
                        tabIndex={1}
                      />
                    </div>
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.username}
                        onChange={(e) => { e.preventDefault(); this.setState({ username: e.target.value }); }}
                        tabIndex={3}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={(e) => { e.preventDefault(); this.setState({ password: e.target.value }); }}
                        tabIndex={5}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.last_name}
                        onChange={(e) => { e.preventDefault(); this.setState({ last_name: e.target.value }); }}
                        tabIndex={2}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={(e) => { e.preventDefault(); this.setState({ email: e.target.value }); }}
                        tabIndex={4}
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={this.state.confirmPassword}
                        onChange={(e) => { e.preventDefault(); this.setState({ confirmPassword: e.target.value }); }}
                        tabIndex={6}
                      />
                    </div>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="submit" className="btn btn-primary" tabIndex={7} >Save</button>
                  <button className="btn btn-secondary" onClick={this.props.handler}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersCreate;
