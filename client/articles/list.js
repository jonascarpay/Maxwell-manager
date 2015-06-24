Template.articlesList.helpers({
    totalArticles: function() {
        return Articles.find().count();
    },
    articles: function() {
        return Articles.find();
    }
});


Template.articleItem.helpers({
    formatEditor: function() {
        return editor = Editors.findOne(this.editor).name
    },
    formatIssue: function() {
        return "TODO"
            var issue = articleFindParentIssue(this._id)
            if (issue) {
                return issue.issueNumber.year + "." + issue.issueNumber.edition;
            } else {
                return "-"
            }
    }
});

Template.articleItem.events({
    click: function() {
        Router.go('/articles/' + this._id);
    }
});


Template.articlePgIncDec.helpers({
    canDecrease: function() {
        return pages > 1;
    }
});

Template.articlePgIncDec.events({
    "click .pgInc": function() {
        Articles.update({_id: this._id}, {$inc: {pages: 1}});
        return false;
    },
    "click .pgDec": function() {
        if (this.pages > 1) {
            Articles.update({_id: this._id}, {$inc: {pages: -1}});
            return false;
        }
    }
});
