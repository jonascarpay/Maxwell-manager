Template.articleNew.helpers({
    activeEditors: function() {
        return Editors.find({active: true});
    }
});

Template.articleUpdate.helpers({
    editorKV: function() {
        return Meteor.users.find({"profile.active": true}).fetch().map(function(obj) {return {label: obj.profile.name, value: obj._id}});
    },
});
