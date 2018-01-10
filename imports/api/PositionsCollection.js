import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const PositionsCollection = new Mongo.Collection('PositionsCollection');

if (Meteor.isServer) {
  Meteor.publish('PositionsCollection', () => PositionsCollection.find());

  PositionsCollection.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; },
  });

  PositionsCollection.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
  });

  Meteor.methods({
    'position.insert': function (newPosition) {
      newPosition.createdAt = new Date();
      newPosition.createdBy = Meteor.userId();
      newPosition.counter = 0;
      newPosition.active = true;
      newPosition.staff = [];
      return PositionsCollection.insert(newPosition);
    },
    'position.addStaff': function (deptId, staffId) {
      return PositionsCollection.update(
        { _id: deptId },
        {
          $inc: { counter: 1 },
          $push: { staff: staffId },
        },
      );
    },
    'position.delete': function (positionId) {
      return PositionsCollection.update(
        { _id: positionId },
        {
          $set: { active: false },
        },
      );
    },
  });
}

