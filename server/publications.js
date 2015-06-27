
Meteor.publish('editors', function() {
   return Editors.find();
});

Meteor.publish('articles', function() {
   return Articles.find();
});

Meteor.publish('issues', function() {
   return Issues.find();
});

Meteor.publish("userData", function () {
   if (this.userId) {
      return Meteor.users.find();
   } else {
      this.ready();
   }
});
