var Schema = {};
SimpleSchema.debug = true;
Articles = new Mongo.Collection("articles");
Issues   = new Mongo.Collection("issues");

Schema.UserProfile = new SimpleSchema({
    name: {
        type: String,
        label: "Naam",
        max: 55
    },
    active: {
        type: Boolean,
        label: "Actief"
    },
    comments: {
        type: String,
        label: "Commentaar",
        optional: true
    },
    email: {
        type: String,
        label: "E-mail",
        regEx: SimpleSchema.RegEx.Email
    }
});

Schema.User = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: false
    }
});

Meteor.users.attachSchema(Schema.User);
