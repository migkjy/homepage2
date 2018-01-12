import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { withTracker } from 'meteor/react-meteor-data';

class AllClients extends Component {
  renderClientsTable() {
    const clients = this.props.clients;

    return clients.map((client, index) => {
      const cardPath = `/admin/clients/${client.username}`;
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{client.profile.first_name}</td>
          <td>{client.profile.last_name}</td>
          <td><Link to={cardPath}>Card</Link></td>
        </tr>
      );
    });
  }
  render() {
    if (!this.props.loading) {
      return (
        <div role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
          <h1>Clients</h1>
          <nav aria-label="breadcrumb" role="navigation">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Clients</li>
            </ol>
          </nav>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Card</th>
              </tr>
            </thead>
            <tbody>
              {this.renderClientsTable()}
            </tbody>
          </table>
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
  const clientsSubscription = Meteor.subscribe('allClients');
  const allReady = clientsSubscription.ready();
  const loading = allReady ? !allReady : true;
  //   loading은 loading중이라는 뜻, 그래서 완료되면 loading은 false로 전송을 한다. 다 로드 됐으니.
  // 로allReady가 true가 되면 loading은 false로 변경

  return {
    loading,
    clients: Roles.getUsersInRole('client').fetch(),
  };
})(AllClients);
