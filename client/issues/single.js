Template.issueSingle.helpers({
    articleObjects: function() {
        return this.articles.map(function(id) {return Articles.findOne(id)});
    }
});
