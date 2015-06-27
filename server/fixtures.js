if (Meteor.users.find().count() === 0) {
   console.log("Filling DB with mock users");
   Accounts.createUser({
      username: 'Richard',
      password: '123456',
      profile: {
         name: "Actief C. Lid",
         active: true,
         comments: "Dit is commentaar.",
         email: "President-ETV@tudelft.nl"
      },
   });
   Accounts.createUser({
      username: 'Harry',
      password: '123456',
      profile: {
         name: "Inactieve L. Zak",
         active: false,
         comments: "Dit is commentaar.",
         email: "Secretaris-ETV@tudelft.nl"
      }
   });
}

if (Articles.find().count() === 0) {
   console.log("Filling DB with mock articles");
   Articles.insert({
      author: "Mater Tua",
      title: "Random artikel",
      pages: 3,
      editor: Meteor.users.findOne()._id,
   });
   Articles.insert({
      author: "Mater Tua",
      title: "Ander random artikel",
      pages: 2,
      editor: Meteor.users.findOne()._id,
   });
}

if (Issues.find().count() === 0) {
   console.log("Filling DB with mock issues");
   Issues.insert({
      issueNumber: {year: 1, edition: 1},
      comments:    "Testcommentaar",
      createdAt:   new Date(),
      dateOfIssue: new Date(),
      color: "rgb(100,100,0)",
      articles: [Articles.findOne()._id]
   });
}
