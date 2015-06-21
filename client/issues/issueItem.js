Template.issueItem.helpers({
    articleCount: function() {
        // return Issues.findOne(this._id).articles.length;
        return Articles.find({issue: this._id}).count();
    }
});
