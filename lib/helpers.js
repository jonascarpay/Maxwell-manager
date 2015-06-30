articleParentIssueId = function (articleID) {
    var allIssues = Issues.find().fetch();
    for (var i = 0, len = allIssues.length; i < len; i++) {
        if (allIssues[i].articles.indexOf(articleID) > -1) {
            return allIssues[i]._id;
        }
    }
    return null;
}
