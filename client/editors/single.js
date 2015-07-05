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
            alert("Weggooien kan alleen als de persoon inactief is en geen artikelen toegewezen heeft");
        }
    }
});
