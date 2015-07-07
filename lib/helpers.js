articleParentIssueId = function (articleID) {
    var allIssues = Issues.find().fetch();
    for (var i = 0, len = allIssues.length; i < len; i++) {
        if (allIssues[i].articles.indexOf(articleID) > -1) {
            return allIssues[i]._id;
        }
    }
    return null;
}

articleRemoveFromAllIssues = function(articleID) {
    while (articleParentIssueId(articleID)) {
        console.log("Removing article " + articleID + " from " + articleParentIssueId(articleID));
        Issues.update({_id: articleParentIssueId(articleID)}, {$pull: {articles: articleID}});
    }
}

unplacedArticles = function() {
    return Articles.find().fetch().filter(function(article) {return !(articleParentIssueId(article._id))});
}

truncateComment = function (string) {
    var maxlength = 60;
    if (string && (string.length > maxlength)) {
        return (string.substring(0,maxlength - 3) + "...");
    } else {
        return string;
    }
}

deleteIssueAndArticles = function(issueId) {
    var articles = Issues.findOne(issueId).articles;
    for (var i = 0, len = articles.length; i < len; i++) {
        Articles.remove({_id: articles[i]});
    }
    Issues.remove({_id: issueId});
}
