import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

import Checkbox from './Checkbox';

class PositionsCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isManagingPosition: false,
    };
    this.handlePositionsSubmit = this.handlePositionsSubmit.bind(this);
  }
  handlePositionsSubmit(e) {
    e.preventDefault();
    const newPosition = this.state;
    Meteor.call('position.insert', newPosition, (error, success) => {
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
          message: `${newPosition.name} has been added to Positions!`,
          type: 'success',
          style: 'growl-top-right',
          icon: 'fa-user',
        });
      }
    });
    this.props.handler();
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: '20rem' }}>
            <div className="card-body">
              <h4 className="card-title">Add new Position</h4>
              <h6 className="card-subtitle mb-2 text-muted">Please fill in the form and click Save</h6>
              <form onSubmit={this.handlePositionsSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={(e) => {
                      e.preventDefault();
                      this.setState({ name: e.target.value });
                    }}
                  />
                </div>
                <Checkbox
                  label="Managing position?"
                  handleCheckboxChange={(e) => {
                    const past = this.state.isManagingPosition;
                    this.setState({ isManagingPosition: !past });
                  }}
                  key="checkbox1"
                />
                <div className="btn-group">
                  <button type="submit" className="btn btn-primary">Save</button>
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

export default PositionsCreate;
