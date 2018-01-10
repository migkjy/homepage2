import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
  'users.add': function (newUser) {
    console.log(`${newUser.username}, ${newUser.roles[0]}`);
    const cResult = Accounts.createUser({
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      profile: {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        clinic: newUser.department,
      },
    });

    // 이건 작동 안됨. for의 처음은 index임
    // for(const role in newUser.roles){
    //   Roles.addUsersToRoles(cResult, role);
    // }

    // 이건 작동함
    // for (const index in newUser.roles) {
    //   Roles.addUsersToRoles(cResult, newUser.roles[index]);
    // }

    // 차라리 forEach를 쓰면 map처럼 작동한다.
    newUser.roles.forEach((role) => {
      Roles.addUsersToRoles(cResult, role);
    });

    return true;
  },
  'users.addRole': function (userId, newRole) {
    Roles.addUsersToRoles(userId, newRole);
    return true;
  },
});
