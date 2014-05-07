// There are two modules. One stores user data,
// while the other one displays it. The modules
// are decoupled & communicate via App.reqres.

ContactManager.module("Entities",
    function (Entities, ContactManager, Backbone, Marionette, $, _) {
        //attributes to the model and no longer to the application
        Entities.Contact = Backbone.Model.extend({});
        //attributes to the model and no longer to the application
        Entities.ContactCollection = Backbone.Collection.extend({
            model: Entities.Contact,
            comparator: "firstName"
        });
        //private methods to create the data in memory
        var contacts;

        var initializeContacts = function () {
            contacts = new Entities.ContactCollection([
                { id: 1, firstName: "Alice", lastName: "Arten", phoneNumber: "555-0184" },
                { id: 2, firstName: "Bob", lastName: "Brigham", phoneNumber: "555-0163" },
                { id: 3, firstName: "Charlie", lastName: "Campbell", phoneNumber: "555-0129" }
            ]);
        };

        //Define API object to use publically
        var API = {
            getContactEntities: function () {
                if (contacts === undefined) {
                    initializeContacts();
                }
                return contacts;
            }
        };

        // register a request handler "contact:entities"
        // to get contacts: use ContactManager.request("contact:entities")
        ContactManager.reqres.setHandler("contact:entities", function () {
            return API.getContactEntities();
        });


    }
)


