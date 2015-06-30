Template.newEditorForm.helpers({
    newEditorSchema: function() {
        return new SimpleSchema({
            username: {
                type: String,
                label: "Gebruikersnaam",
                regEx: /^[a-z0-9A-Z_]{3,15}$/
            },
            name: {
                type: String,
                label: "Naam",
                max: 143
            },
            email: {
                type: String,
                label: "E-mail",
                regEx: SimpleSchema.RegEx.Email
            },
            active: {
                type: Boolean,
                label: "Actief"
            },
            comments: {
                type: String,
                label: "Commentaar",
                optional: true
            }
        });
    }
});
