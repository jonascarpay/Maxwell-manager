Template.editorsList.helpers({
    totalEditors: function() {
        return Meteor.users.find().count();
    },
    activeEditors: function() {
        return Meteor.users.find({"profile.active": true}).count();
    },
    editors: function() {
        return Meteor.users.find({},{sort: {"profile.active": -1}});
    }
});

Template.editorsList.events({
    "click .deleteEditor": function() {
        Meteor.users.remove(this._id);
    },
});

Template.editorItem.helpers({
    editorArticleCount: function() {
        return Articles.find({editor: this._id}).count();
    },
    editorCanBeDeleted: function() {
        return (this.profile.active === false) && (Articles.find({editor: this._id}).count() === 0);
    }
});

Template.editorItem.events({
    click: function() {
        Router.go('/editors/' + this._id);
    }
});
