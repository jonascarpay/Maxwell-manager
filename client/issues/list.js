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
        return this.articles.length;
    },
    pagesCount: function() {
        var totalPages = 0;
        for (var i = 0; i < this.articles.length; i++) {
            totalPages += Articles.findOne(this.articles[i]).pages;
        }
        return totalPages;
    }
});

Template.issueItem.events({
    click: function() {
        Session.set("selectedIssueID",this._id)
    }
});
