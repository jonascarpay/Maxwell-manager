Template.editorSingle.helpers({
    myArticles: function() {
        return Articles.find({editor: this._id});
    }
});

Template.updateEditorForm.events({
    "click #verwijderknop": function(event) {
        event.preventDefault();
        if ( (!this.profile.active) && (Articles.find({editor: this._id}).count() === 0)) {
            Meteor.users.remove(this._id);
            Router.go('/editors');
        } else {
            alert("Deleting can only be done if the person that is inactive does not have any articles assigned");
        }
    }
});
