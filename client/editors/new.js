Template.editorNew.events({
    "submit .new-editor": function(event) {
        // TODO: Form validation
        event.preventDefault();

        console.log("blurp");

        Meteor.call("createEditor",
                event.target.newEditorUsername.value,
                {
                    name:     event.target.newEditorName.value,
                    active:   event.target.newEditorActive.checked,
                    comments: event.target.newEditorComments.value,
                    email:    event.target.newEditorEmail.value
                });

        // event.target.newEditorName.value = "";
        // event.target.newEditorActive.checked = "true";
        // event.target.newEditorComments.value = "";
        // event.target.newEditorEmail.value = "";
    },
});
