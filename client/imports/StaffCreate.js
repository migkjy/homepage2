import React, { Component } from 'react';
import Select from 'react-select';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

class StaffCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      department: '',
      deptId: '',
      position: '',
      posId: '',
    };
    this.handleStaffSubmit = this.handleStaffSubmit.bind(this);
  }
  handleStaffSubmit(e) {
    e.preventDefault();
    const newStaff = this.state;
    Meteor.call('staff.insert', newStaff, (error, success) => {
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
          title: 'Successful added',
          message: `${newStaff.first_name} ${newStaff.last_name} has been added to Staff!`,
          type: 'success',
          style: 'growl-top-right',
          icon: 'fa-user',
        });
      }
    });
    this.props.handler();
  }
  render() {
    const depts = this.props.departments.map((dept, index) => (
      { label: dept.name, value: dept._id }
    ));
    const pos = this.props.positions.map((pos, index) => (
      { label: pos.name, value: pos._id }
    ));
    return (
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: '20rem' }}>
            <div className="card-body">
              <h4 className="card-title">Add new staff member</h4>
              <h6 className="card-subtitle mb-2 text-muted">Please fill in the form and click Save</h6>
              <form onSubmit={this.handleStaffSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.first_name}
                    onChange={(e) => {
                      e.preventDefault();
                      this.setState({ first_name: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.last_name}
                    onChange={(e) => {
                      e.preventDefault();
                      this.setState({ last_name: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <Select
                    options={depts}
                    value={this.state.deptId}
                    onChange={(e) => { this.setState({ department: e.label, deptId: e.value }); }}
                  />

                </div>
                <div className="form-group">
                  <Select
                    options={pos}
                    value={this.state.posId}
                    onChange={(e) => { this.setState({ position: e.label, posId: e.value }); }}
                  />
                </div>
                <div className="btn-group">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button
                    className="btn btn-secondary"
                    onClick={this.props.handler}
                  >Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StaffCreate;
