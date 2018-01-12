import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Loading from './../component/Loading';

class SingleClient extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    console.log(this.props);
    const username = this.props.match.params.username;
    const profile = this.props.client.profile;
    console.log(profile);

    return (
      <div role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
        <h1>{profile.first_name}&nbsp;{profile.last_name}'s card</h1>
        <nav aria-label="breadcrumb" role="navigation">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
            <li className="breadcrumb-item"><Link to="/admin/clients">Clients</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Username: {username}</li>
          </ol>
        </nav>
      </div>
    );
  }
}

export default withTracker((props) => {
  const username = props.match.params.username;
  const clientProfile = Meteor.subscribe('getClientsCard', username);
  const loading = clientProfile ? !clientProfile.ready() : true;
  return {
    loading,
    client: Meteor.users.findOne({ username }),
  };
})(SingleClient);
