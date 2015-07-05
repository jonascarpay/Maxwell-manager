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
    }
});
