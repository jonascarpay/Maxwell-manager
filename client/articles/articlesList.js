Template.articlesList.helpers({
    totalArticles: function() {
        return Articles.find().count();
    },
    articles: function() {
        return Articles.find();
    }
});
