var ContactManager = new Marionette.Application();

ContactManager.addRegions({
    mainRegion: "#main-region"
});


ContactManager.on("initialize:after", function () {
    //ContactManager.ContactsApp.List.Controller.listContacts();
   // window.contacts = ContactManager.request("contact:entities");
    console.log('Getting data from app:',ContactManager.request("contact:entities").toJSON);

});

