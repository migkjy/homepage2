import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { StaffCollection } from '../../../imports/api/StaffCollection';
import { DepartmentsCollection } from '../../../imports/api/DepartmentsCollection';
import { PositionsCollection } from '../../../imports/api/PositionsCollection';

import StaffCreate from './StaffCreate';

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreatingStaff: false,
    };
    this.toggleCreateState = this.toggleCreateState.bind(this);
  }만
  toggleCreateState() {
    // 이건 이벤트 타겟과는 상관이 없구만
    // e.preventDefault(); 오히려 작동을 안해버림
    const toggle = !this.state.isCreatingStaff;
    this.setState({ isCreatingStaff: toggle });
  }
  renderStaffTable() {
    const staff = this.props.staff;
    if (staff.length === 0) {
      return (
        <tr>
          <th scope="row">Add a new staff</th>
        </tr>);
    }
    return staff.map((member, index) => (
      <tr key={member._id}>
        <th scope="row">{index + 1}</th>
        <td>{member.first_name}</td>
        <td>{member.last_name}</td>
        <td>{member.department}</td>
      </tr>
    ));
  }
  renderCreateStaffArea() {
    if (!this.state.isCreatingStaff) {
      return (
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            this.setState({ isCreatingStaff: true });
          }}
        >Add staff member <i className="fa fa-plus" />
        </button>
      );
    }
    return (<StaffCreate
      handler={this.toggleCreateState}
      departments={this.props.departments}
      positions={this.props.positions}
    />);
  }
  render() {
    return (
      <div role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
        <h1>Staff</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
            <li className="breadcrumb-item" aria-current="page">Departments</li>
            <li className="breadcrumb-item active" aria-current="page">Staff</li>
          </ol>
        </nav>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Nmae</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>
            {this.renderStaffTable()}
          </tbody>
        </table>
        {this.renderCreateStaffArea()}
      </div>
    );
  }
}

export default withTracker((props) => {
  const staffSubscription = Meteor.subscribe('StaffCollection');
  const deptSubscription = Meteor.subscribe('DepartmentsCollection');
  const posSubscription = Meteor.subscribe('PositionsCollection');
  const allReady = staffSubscription.ready() && deptSubscription.ready() && posSubscription.ready();
  const loading = staffSubscription ? !allReady : true;

  return {
    loading,
    staff: StaffCollection.find().fetch(),
    departments: DepartmentsCollection.find().fetch(),
    positions: PositionsCollection.find().fetch(),
  };
})(Staff);

