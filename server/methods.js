Meteor.methods({
   createEditor: function(doc) {
      check(doc, Schema.NewEditor);

      if (Meteor.userId()) {
         console.log("User " + doc.username + " created by " + Meteor.userId());
         Accounts.createUser({
            username: doc.username,
            password: doc.username,
            profile: {
               name:     doc.name,
               active:   doc.active,
               comments: doc.comments,
               email:    doc.email
            }
         });
      } else {
         console.log("Jo iemand hackt je");
      }

   }
});
