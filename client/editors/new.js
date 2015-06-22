Template.editorNew.events({
    "submit .new-editor": function(event) {
        // TODO: Form validation

        Editors.insert({
            firstName: event.target.newEditorFirstName.value,
            surname:   event.target.newEditorSurname.value,
            active:    event.target.newEditorActive.checked,
            comments:  event.target.newEditorComments.value,
            email:     event.target.newEditorEmail.value
        });

        event.target.newEditorFirstName.value = "";
        event.target.newEditorSurname.value = "";
        event.target.newEditorActive.checked = "true";
        event.target.newEditorComments.value = "";
        event.target.newEditorEmail.value = "";

        return false;
    },
});
