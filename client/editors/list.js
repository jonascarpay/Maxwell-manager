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

Template.editorItem.helpers({
    editorArticleCount: function() {
        return Articles.find({editor: this._id}).count();
    },
});

Template.editorItem.events({
    click: function() {
        Router.go('/editors/' + this._id);
    }
});

Template.editorNew.helpers({
    newEditorSchema: function() {
        return Schema.NewEditor;
    }
});
