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
        onSuccess: function(formType, result) {
            var urlArray = Router.current().url.split('/');
            var id = urlArray[urlArray.length -1];
            var parentId = articleParentIssueId(id);
            if (parentId) {
                Router.go('/issues/'+parentId);
            } else {
                Router.go('/articles');}
        }
    },
    issueInsertArticleForm: {
        onSuccess: function(formType, result) {
            var urlArray = Router.current().url.split('/');
            var id = urlArray[urlArray.length -1];
            Issues.update({_id: id},{$push: {articles: result}});
        }

    },
    insertIssueForm: {
        onSuccess: function(formType, result) {
            Issues.update({_id: result},{$push: {articles: {$each: [
                Articles.insert({title: "Cover",            	status: "Confirmed", category: "Framework", pages: 1, editor: Meteor.userId()}),
                Articles.insert({title: "Editorial",       	status: "Confirmed", category: "Article",    pages: 1, editor: Meteor.userId()}),
                Articles.insert({title: "Index",   		status: "Confirmed", category: "Framework", pages: 1, editor: Meteor.userId()}),
                Articles.insert({title: "FTB",             	status: "Confirmed", category: "Article",    pages: 1, editor: Meteor.userId()}),
                Articles.insert({title: "Activities",      	status: "Confirmed", category: "Article",    pages: 2, editor: Meteor.userId()}),
                Articles.insert({title: "Rear Cover", 	   	status: "Confirmed", category: "Framework", pages: 1, editor: Meteor.userId()})
            ]}}})
        }
    }
});
