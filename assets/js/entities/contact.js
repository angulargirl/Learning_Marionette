// module responsible for defining Entities.Contact and Entities.Contacts for storing data
// uses the request response system so modules can talk to each other via a global object
// with a very broad API. Note neither Contact nor ContactCollection is connected to the app object
// but is now connected to the module name
ContactManager.module("Entities",
    function (Entities, ContactManager, Backbone, Marionette, $, _) {
        Entities.Contact = Backbone.Model.extend({});
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
        // ContactManager.reqres is the request response system global object
        // defined by Marionette at the app level
        // setHandler registers a request handler "contact:entities"
        // Use ContactManager.request("contact:entities")to get contacts elsewhere
        ContactManager.reqres.setHandler("contact:entities", function () {
            return API.getContactEntities();
        });


    }
)


