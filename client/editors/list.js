Template.editorsList.helpers({
    totalEditors: function() {
        return Editors.find().count();
    },
    activeEditors: function() {
        return Editors.find({active: true}).count();
    },
    editors: function() {
        return Editors.find({},{sort: {active: -1}});
    }
});

Template.editorItem.helpers({
    editorArticleCount: function() {
        return Articles.find({editor: this._id}).count();
    }
});
