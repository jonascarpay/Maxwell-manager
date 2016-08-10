Template.issuesList.helpers({
    issues: function() {
        return Issues.find({}, {sort: {"issueNumber.year": -1, "issueNumber.edition": -1}});
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
    },
    formatComments: function() {
        return truncateComment(this.comments);
    }
});

Template.issueItem.events({
    click: function() {
        Router.go('/issues/' + this._id);
    }
});

Template.issueNew.onRendered( function() {
    $('.themakleur').colorpicker({format: "rgb"});
});
