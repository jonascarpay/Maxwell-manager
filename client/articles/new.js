Template.articleNew.helpers({
    activeEditors: function() {
        return Editors.find({active: true});
    }
});
Template.editorNew.events({
    "submit .new-article": function(event) {
        console.log(event);
        Articles.insert({
            author: event.target.newArticleAuthor.value,
            title:  event.target.newArticleTitle.value,
            pages:  event.target.newArticlePages.value,
            editor: event.target.newArticleEditor.value
        });
        return false;
    },
});
