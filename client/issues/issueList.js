Template.issuesList.helpers({
    totalIssues: function() {
        return Issues.find().count();
    },
    issues: function() {
        return Issues.find();
    }
});
