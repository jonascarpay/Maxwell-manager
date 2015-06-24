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

Template.editorsList.events({
    "click .deleteEditor": function() {
        Editors.remove(this._id);
    },
});

Template.editorItem.helpers({
    editorArticleCount: function() {
        return Articles.find({editor: this._id}).count();
    },
    editorCanBeDeleted: function() {
        return (this.active === false) && (Articles.find({editor: this._id}).count() === 0);
    }
});

Template.editorItem.events({
    click: function() {
        Router.go('/editors/' + this._id);
    }
});
