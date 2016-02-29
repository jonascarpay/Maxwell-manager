Template.articleSingle.helpers({
    articleParent: function() {
        return articleParentIssueId(this._id);
    },
    formatParent: function() {
        var issueNumber = Issues.findOne(articleParentIssueId(this._id)).issueNumber;
        return issueNumber.year + "." + issueNumber.edition;
    }
});

Template.articleUpdate.helpers({
    editorKV: function() {
        return Meteor.users.find({"profile.active": true}).fetch().map(function(obj) {return {label: obj.profile.name, value: obj._id}});
    },
});

Template.articleUpdate.events({
    "click #verwijderknop": function(event) {
        event.preventDefault();
        var parentID = articleParentIssueId(this._id);
        if (parentID) {
            Issues.update({_id: parentID},{$pull: {articles: this._id}});
        }
        Articles.remove(this._id);
        Router.go('/articles');
    }
});

Template.articlePlace.helpers({
    issues: function() {
        return Issues.find();
    },
});

Template.articlePlace.events({
    "submit": function(event) {
        event.preventDefault();
        var targetIssue = event.target.issueField.value;
        if (targetIssue === articleParentIssueId(this._id)) {
            console.log("This article is already in this issue!");
        } else {
            articleRemoveFromAllIssues(this._id);
            Issues.update({_id: targetIssue}, {$push: {articles: this._id}});
        }
        if (targetIssue !== "null") {
            Router.go('/issues/'+targetIssue);
        } else {
            Router.go('/articles')
        }
        return false;
    }
});
