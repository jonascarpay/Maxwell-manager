Template.editorItem.helpers({
    editorArticleCount: function() {
        return Articles.find({editor: this._id}).count();
    }
});
