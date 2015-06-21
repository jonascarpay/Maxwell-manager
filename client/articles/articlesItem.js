Template.articleItem.helpers({
    formatEditor: function() {
        var editor = Editors.findOne(this.editor);
        console.log(Editors.find().fetch());
        return editor.surname + ", " + editor.firstName;
    },
    formatIssue: function() {
        var localIssueNumber = Issues.findOne(this.issue).issueNumber;
        return localIssueNumber.year + "." + localIssueNumber.edition;
    }
});
