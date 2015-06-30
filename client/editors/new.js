Template.editorNew.events({
    "submit .new-editor": function(event) {
        event.preventDefault();

        Meteor.call("createEditor",
                event.target.newEditorUsername.value,
                {
                    name:     event.target.newEditorName.value,
                    active:   event.target.newEditorActive.checked,
                    comments: event.target.newEditorComments.value,
                    email:    event.target.newEditorEmail.value
                });
        Router.go('/editors');
    },
});
