Template.issueItem.helpers({
    articleCount: function() {
        return Articles.find({issue: this._id}).count();
    }
});
