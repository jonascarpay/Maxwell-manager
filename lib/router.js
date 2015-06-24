Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'spinner',
    waitOn: function() {
        return [Meteor.subscribe('editors'),
        Meteor.subscribe('articles'),
        Meteor.subscribe('issues')];
    }
});

Router.route('/', {name: 'landingPage'});

Router.route('/issues', {name: 'issuesList'});

Router.route('/articles', {name: 'articlesList'});

Router.route('/editors', {name: 'editorsList'});
Router.route('/editors/:_id', {
    name: 'editorSingle',
    data: function() { return Editors.findOne(this.params._id); }
});
