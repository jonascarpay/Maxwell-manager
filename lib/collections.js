Schema = {};
SimpleSchema.debug = true;

Schema.UserProfile = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 143
    },
    active: {
        type: Boolean,
        label: "Active"
    },
    comments: {
        type: String,
        label: "Comments",
        optional: true,
        max: 5000,
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
Meteor.users.allow({
    insert: function() {return true;},
    update: function() {return true;},
    remove: function() {return true;}
});

articleStatuses = [ "None", "Contacted", "Confirmed", "Temporary Version", "Final Version", "Indesigned"];
articleCategories = ["Article", "Advertisement", "Framework"];
Articles = new Mongo.Collection("articles");
Schema.Article = new SimpleSchema({
    author: {
        type: String,
        label: "Author",
        max: 143,
        optional: true,
    },
    title: {
        type: String,
        label: "Title",
        max: 143
    },
    pages: {
        type: Number,
        label: "Number of pages",
        min: 1,
        max: 20
    },
    editor: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
        label: "Responsible"
    },
    status: {
        type: String,
        defaultValue: "Niets",
        allowedValues: articleStatuses,
        label: "Status"
    },
    category: {
        type: String,
        defaultValue: "Kopij",
        allowedValues: articleCategories,
        label: "Category"
    },
    comments: {
        type: String,
        label: "Comments",
        optional: true,
        max: 5000,
    }
});
Articles.attachSchema(Schema.Article);
Articles.allow({
    insert: function() {
        return !!Meteor.userId();},
    update: function() {
        return !!Meteor.userId();},
    remove: function() {
        return !!Meteor.userId();}
});


Issues = new Mongo.Collection("issues");
Schema.IssueNumber = new SimpleSchema({
    year: {
        type: Number,
        label: "Year",
        min: 1,
        max: 40
    },
    edition: {
        type: Number,
        label: "Edition",
        min: 1,
        max: 40
    }
});
Schema.Issue = new SimpleSchema({
    issueNumber: {
        type: Schema.IssueNumber
    },
    comments: {
        type: String,
        label: "Comments",
        optional: true,
        defaultValue: "Deadlines:",
        max: 5000,
    },
    color: {
        type: String,
        label: "Color (CSS)",
        defaultValue: "rgb(143,55,31)"
    },
    articles: {
        type: Array,
        defaultValue: [],
    },
    'articles.$': {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    }
});
Issues.attachSchema(Schema.Issue);
Issues.allow({
    insert: function() {return true;},
    update: function() {return true;},
    remove: function() {return true;}
});

Schema.NewEditor = new SimpleSchema({
    username: {
        type: String,
        label: "Username",
        regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    name: {
        type: String,
        label: "Name",
        max: 143
    },
    email: {
        type: String,
        label: "E-mail",
        regEx: SimpleSchema.RegEx.Email,
    },
    active: {
        type: Boolean,
        label: "Active"
    },
    comments: {
        type: String,
        label: "Comments",
        optional: true,
        max: 5000,
    }
});
