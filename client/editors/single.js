Template.editorSingle.helpers({
    myArticles: function() {
        return Articles.find({editor: this._id});
    }
});
