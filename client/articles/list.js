Template.articlesList.helpers({
    articles: function() {
        return unplacedArticles();
    }
});


Template.articleItem.helpers({
    formatEditor: function() {
        var editor = Meteor.users.findOne(this.editor);
        if (editor) {
            return editor.profile.name;
        } else {
            return "-";
        }
    },
    parentIssue: function() {
        return articleParentIssueId(this._id);
    },
    formatIssue: function() {
        var issue = Issues.findOne(articleParentIssueId(this._id));
        if (issue) {
            return issue.issueNumber.year + "." + issue.issueNumber.edition;
        } else {
            return "-"
        }
    },
    formatStatus: function() {
        switch (this.status) {
            case "None":
                return "text-danger";
            case "Contacted":
                return "text-info";
            case "Confirmed":
                return "text-muted";
            case "Temporary Version":
                return "text-warning";
            case "Final Version":
                return "text-warning";
            case "Indesigned":
                return "text-success";
            default:
                return "text-danger";
        }
    },
    formatComments: function() {
        return truncateComment(this.comments)
    }
});

Template.articleItem.events({
    click: function() {
        Router.go('/articles/' + this._id);
    }
});

Template.articleNew.helpers({
    editorKV: function() {
        return Meteor.users.find({"profile.active": true}).fetch().map(function(obj) {return {label: obj.profile.name, value: obj._id}});
    },
});
