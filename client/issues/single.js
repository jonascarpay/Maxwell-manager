
Template.issueSingle.helpers({
    articleObjects: function() {
	return this.articles.map(function(id) {return Articles.findOne(id)});
    },
    totalPages: function() {
	return this.articles.reduce(function(total, id) {
	    return total + Articles.findOne(id).pages
	}, 0)
    },
    repeater: function() {
	return new Array(this.articles.reduce(function(total, id) {
	    return total + Articles.findOne(id).pages
	}, 0) - 1).join(' ').split(' ')
    }
});

Template.issueSingle.rendered = function() {
    var self=this.data;
    var list = document.getElementById("articles-sortable");
    Sortable.create(list, {
	animation: 150,
	onUpdate: function (e) {
	    var idArray = Array.prototype.map.call(this.el.children, function(el) {
		return el.getAttribute("id")
	    });
	    console.log(idArray);
	    Issues.update({_id: self._id},{$set: {articles: idArray}});
	},
    });
}
