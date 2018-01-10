import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const DepartmentsCollection = new Mongo.Collection('DepartmentsCollection');

if (Meteor.isServer) {
  Meteor.publish('DepartmentsCollection', () => DepartmentsCollection.find());

  DepartmentsCollection.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; },
  });

  DepartmentsCollection.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
  });

  Meteor.methods({
    'department.insert': function (newDepartment) {
      newDepartment.createdAt = new Date();
      newDepartment.createdBy = Meteor.userId();
      newDepartment.counter = 0;
      newDepartment.active = true;
      newDepartment.staff = [];
      return DepartmentsCollection.insert(newDepartment);
    },
    'department.addStaff': function (deptId, staffId) {
      return DepartmentsCollection.update(
        { _id: deptId },
        {
          $inc: { counter: 1 },
          $push: { staff: staffId },
        },
      );
    },
    'department.delete': function (departmentId) {
      return DepartmentsCollection.update(
        { _id: departmentId },
        {
          $set: { active: false },
        },
      );
    },
  });
}

