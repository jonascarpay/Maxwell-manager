Template.articleItem.helpers({
    formatEditor: function() {
        var editor = Editors.findOne(this.editor);
        return editor.surname + ", " + editor.firstName;
    },
    formatIssue: function() {
        var issue = Issues.findOne(this.issue);
        if (issue) {
            return issue.issueNumber.year + "." + issue.issueNumber.edition;
        } else {
            return "-"
        }
    }
});
