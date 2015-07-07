Template.menu.helpers({
});

AutoForm.hooks({
    updateEditorForm: {
        onSuccess: function() {Router.go('/editors');}
    },
    newEditorForm: {
        onSuccess: function() {Router.go('/editors');}
    },
    updateArticleForm: {
        onSuccess: function() {Router.go('/articles');}
    },
    issueInsertArticleForm: {
        onSuccess: function(formType, result) {
            var urlArray = Router.current().url.split('/');
            var id = urlArray[urlArray.length -1];
            Issues.update({_id: id},{$push: {articles: result}});
        }

    }
});
