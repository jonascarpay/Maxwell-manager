Template.issueSingle.helpers({
    articleObjects: function() {
        return this.articles.map(function(id) {return Articles.findOne(id)});
    }
});

Template.issueArticle.rendered = function() {
	console.log(this)
}

Template.issueArticle.helpers({
	repeater: function() {
		return new Array(this.pages - 1).fill(0)
	}
})