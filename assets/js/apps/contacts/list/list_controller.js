//module responsible for defining List.Controller
ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.Controller = {
    listContacts: function(){
      //use request response system to get contacts from the entities module
      var contacts = ContactManager.request("contact:entities");
      //instantiate the view
      var contactsListView = new List.Contacts({
          //put contacts in List.Contacts collection attribute
        collection: contacts
      });
        contactsListView.on("itemview:contact:delete", function(childView, model){
            contacts.remove(model);
        });
      //render the view in region
      ContactManager.mainRegion.show(contactsListView);
    }
  }
});
