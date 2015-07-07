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
