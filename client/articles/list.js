Template.articlesList.helpers({
    articles: function() {
        return unplacedArticles();
    }
});


Template.articleItem.helpers({
    formatEditor: function() {
        var editor = Meteor.users.findOne(this.editor).profile.name;
        if (editor) {
            return editor;
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
            case "Niets":
                return "text-danger";
            case "Aangeschreven":
                return "text-info";
            case "Bevestigd":
                return "text-muted";
            case "Voorlopige versie":
                return "text-warning";
            case "Definitieve versie":
                return "text-warning";
            case "Geindesignd":
                return "text-success";
            default:
                return "text-danger";
        }
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
