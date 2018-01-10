import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { UserStatus } from 'meteor/mizzao:user-status';

import '../imports/api/users';
import '../imports/api/StaffCollection';
import '../imports/api/DepartmentsCollection';
import '../imports/api/PositionsCollection';
import '../imports/api/ClientsCardCollection';

Meteor.startup(() => {
  Meteor.publish('allUsers', () => Meteor.users.find({}));
  Meteor.publish('allRoles', () => Meteor.roles.find({}));
  Meteor.publish('allClients', () => Roles.getUsersInRole('client'));
  Meteor.publish('getClientsCard', username => Meteor.users.find({ username }));
  // Meteor.publish('UserStatus', () => UserStatus.connections.find());

  if (Meteor.users.find().count() === 0) {
    const cResult = Accounts.createUser({
      username: 'admin',
      email: 'migkjy@naver.com',
      password: '6900theno1',
      profile: {
        first_name: 'Junyoung',
        last_name: 'Kim',
        clinic: 'MM Dent',
      },
    });

    Roles.addUsersToRoles(cResult, 'admin');
  }
});
