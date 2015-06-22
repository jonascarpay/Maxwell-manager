Template.issueItem.helpers({
    articleCount: function() {
        return Articles.find({issue: this._id}).count();
    }
});
Template.issueItem.events({
    click: function() {
        console.log(this._id);
        Session.set("selectedIssueID",this._id)
    }
});
