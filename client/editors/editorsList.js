Template.editorsList.helpers({
    totalEditors: function() {
        return Editors.find().count();
    },
    activeEditors: function() {
        return Editors.find({active: true}).count();
    },
    editors: function() {
        return Editors.find({},{sort: {active: -1}});
    }
});
