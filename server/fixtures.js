if (Editors.find().count() === 0 ) {
   Editors.insert({
      firstName: "Jan",
      surname: "Van het Lid",
      active: true,
      comments: "Dit is commentaar.",
      email: "Secretaris-ETV@tudelft.nl"
   });
   Editors.insert({
      firstName: "Jan",
      surname: "Van het Inactieve Lid",
      active: false,
      comments: "Dit is commentaar.",
      email: "Secretaris-ETV@tudelft.nl"
   });
}

if (Issues.find().count() === 0) {
   Issues.insert({
      issueNumber: {year: 1, edition: 1},
      comments:    "Testcommentaar",
      createdAt:   new Date(),
      dateOfIssue: new Date(),
      color: "rgb(100,100,0)"
   });
}

if (Articles.find().count() === 0) {
   Articles.insert({
      author: "Mater Tua",
      subject: "Poeder",
      editor: Editors.findOne()._id,
      issue: Issues.findOne()._id
   });
}
