Meteor.publish('articles', function() {
   return Articles.find();
});

Meteor.publish('issues', function() {
   return Issues.find();
});

Meteor.publish("userData", function () {
   return Meteor.users.find();
});
