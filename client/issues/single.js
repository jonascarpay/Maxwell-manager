Template.issueSingle.helpers({
    articleObjects: function() {
	return this.articles.map(function(id) {return Articles.findOne(id);});
    },
    totalPages: function() {
	return this.articles.reduce(function(total, id) {
	    return total + Articles.findOne(id).pages;
	}, 0);
    },
    repeater: function() {
	return new Array(this.articles.reduce(function(total, id) {
	    return total + Articles.findOne(id).pages;
	}, 0) - 1).join(' ').split(' ');
    }
});

Template.issueSingle.rendered = function() {
    var self=this.data;
    var list = document.getElementById("articles-sortable");
    Sortable.create(list, {
	animation: 150,
	onUpdate: function (e) {
	    var idArray = Array.prototype.map.call(this.el.children, function(el) {
		return el.getAttribute("id");
	    });
	    Issues.update({_id: self._id},{$set: {articles: idArray}});
	},
    });

    //hoofd
    Array.prototype.forEach.call(list.children, function(el) {
    	addEventListener("dragstart", function(e) {
		    var img = document.createElement("img");
		    img.src = "http://kryogenix.org/images/hackergotchi-simpler.png";
		    e.dataTransfer.setDragImage(img, 0, 0);
		}, false);
	});
};

Template.issueArticle.helpers({
    bgStyle: function() {
	switch (this.category) {
	    case 'Framework':
		return "background-color: rgb(223, 240, 216)";
	    case 'Advertisement':
		return "background-color: rgb(252, 248, 227)";
	    default:
		return "";
	}
    },
    makeUniqueID: function() {
	return "update-each-" + this._id;
    },
    editorKV: function() {
	return Meteor.users.find({"profile.active": true}).fetch().map(function(obj) {return {label: obj.profile.name, value: obj._id};});
    },
    formatEditor: function() {
	return Meteor.users.findOne(this.editor).profile.name;
    },
    formatStatus: function () {
	if (this.category == "Framework") {
	    if (this.status == "Indesigned") {
		return "";
	    } else {
		return "text-danger";
	    }
	} else {
	    switch (this.status) {
		case 'Indesigned':
		    return "";
		case 'Contacted':
		    return "";
		case 'Confirmed':
		    return "";
		default:
		    return "text-danger";
	    }
	}
    },
});

Template.addArticle.helpers({
    unusedArticles: function() {
	return unplacedArticles();
    },
    editorKV: function() {
	return Meteor.users.find({"profile.active": true}).fetch().map(function(obj) {return {label: obj.profile.name, value: obj._id};});
    },
});

Template.addArticle.events({
    "submit .bestaandArtikelFormulier": function() {
	event.preventDefault();
	if (event.target.articleField.value) {
	    Issues.update({_id: this._id},{$push: {articles: event.target.articleField.value}});
	} else {
	    console.log("nope");
	}
	return false;
    }
});

Template.issueDetails.events({
    "click #verwijderknop": function(event) {
	event.preventDefault();
	if (this.articles.length === 0) {
	    Issues.remove(this._id);
	} else {
	    alert("You can only delete editions that do not contain any articles");
	}
    }
});
Template.issueDetails.onRendered(function() {
    $('.themakleur').colorpicker({format: "rgb"});
});
