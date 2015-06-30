var Schema = {};
SimpleSchema.debug = true;

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

Articles = new Mongo.Collection("articles");
Schema.Article = new SimpleSchema({
    author: {
        type: String,
        label: "Auteur",
        max: 55
    },
    title: {
        type: String,
        label: "Titel",
        max: 143
    },
    pages: {
        type: Number,
        label: "Aantal pagina's",
        max: 20
    },
    editor: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },
    status: {
        type: String,
        label: "Status"
    }
});
Articles.attachSchema(Schema.Article);

Issues = new Mongo.Collection("issues");
Schema.IssueNumber = new SimpleSchema({
    year: {
        type: Number,
        label: "Jaargang",
        min: 1
    },
    edition: {
        type: Number,
        label: "Editie",
        min: 1
    }
});
Schema.Issue = new SimpleSchema({
    issueNumber: {
        type: Schema.IssueNumber
    },
    comments: {
        type: String,
        label: "Commentaar",
    },
    dateOfIssue: {
        type: Date,
        label: "Verschijningsdatum"
    },
    color: {
        type: String,
        label: "Kleur (CSS)",
        defaultValue: "rgb(100,100,100)"
    },
    articles: {
        type: [String],
        label: "Artikel-array",
    }
});
Issues.attachSchema(Schema.Issue);
