Template.issuesList.helpers({
    totalIssues: function() {
        return Issues.find().count();
    },
    issues: function() {
        return Issues.find();
    }
});

Template.issueItem.helpers({
    articleCount: function() {
        return Articles.find({issue: this._id}).count();
    }
});
Template.issueItem.events({
    click: function() {
        Session.set("selectedIssueID",this._id)
    }
});
