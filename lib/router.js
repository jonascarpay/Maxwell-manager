Router.configure({
    layoutTemplate: 'layout',
    // loadingTemplate: 'spinner',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return [ Meteor.subscribe('articles'),
        Meteor.subscribe('userData'),
        Meteor.subscribe('issues')];
    }
});

Router.route('/', {name: 'landingPage'});
Router.route('/about', {name: 'aboutPage'});

Router.route('/issues', {name: 'issuesList'});
Router.route('/issues/:_id', {
    name: 'issueSingle',
    data: function() { return Issues.findOne(this.params._id); }
});

Router.route('/articles', {name: 'articlesList'});
Router.route('/articles/:_id', {
    name: 'articleSingle',
    data: function() { return Articles.findOne(this.params._id); }
});

Router.route('/editors', {name: 'editorsList'});
Router.route('/editors/:_id', {
    name: 'editorSingle',
    data: function() { return Meteor.users.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound');
