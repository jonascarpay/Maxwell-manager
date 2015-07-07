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

Template.issueArticle.helpers({
    bgStyle: function() {
	switch (this.category) {
	    case 'Raamwerk':
		return "background-color: rgb(223, 240, 216)";
	    case 'Advertentie':
		return "background-color: rgb(217, 2317, 247)";
	    default:
		return ""
	}
    },
    makeUniqueID: function() {
	return "update-each-" + this._id;
    },
    editorKV: function() {
        return Meteor.users.find({"profile.active": true}).fetch().map(function(obj) {return {label: obj.profile.name, value: obj._id}});
    },
    formatEditor: function() {
	return Meteor.users.findOne(this.editor).profile.name;
    },
});
