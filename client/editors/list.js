Template.editorsList.helpers({
    editors: function() {
        return Meteor.users.find({},{sort: {"profile.active": -1}});
    }
});

Template.editorItem.helpers({
    editorArticleCount: function() {
        return Articles.find({editor: this._id}).count();
    },
    formatComments: function() {
        return truncateComment(this.profile.comments);
    }
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
