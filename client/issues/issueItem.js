Template.issueItem.helpers({
    articleCount: function() {
        return Issues.findOne(this._id).articles.length;
    }
});
