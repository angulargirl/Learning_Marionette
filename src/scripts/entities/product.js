// module responsible for defining Entities.Product and Entities.Products for storing data
// uses the request response system so modules can talk to each other via a global object
// with a very broad API. Note neither Product nor ProductCollection is connected to the app object
// but is now connected to the module name
ProductManager.module("Entities",
    function (Entities, ProductManager, Backbone, Marionette, $, _) {
        Entities.Product = Backbone.Model.extend({});
        Entities.ProductCollection = Backbone.Collection.extend({
            model: Entities.Product,
            comparator: "productName"
        });
        //private methods to create the data in memory
        var products;

        var initializeProducts = function () {
            products = new Entities.ProductCollection([
                { id: 1, productName: "E-banana 5 Pocket Leather Tool Pouch"},
                { id: 2, productName: "E-banana Soap"},
                { id: 3, productName: "E-space Clear product X"}
            ]);
        };

        //Define API object to use publically
        var API = {
            getProductEntities: function () {
                if (products === undefined) {
                    initializeProducts();
                }
                return products;
            }
        };
        // ProductManager.reqres is the request response system global object
        // defined by Marionette at the app level
        // setHandler registers a request handler "product:entities"
        // Use ProductManager.request("product:entities")to get products elsewhere
        ProductManager.reqres.setHandler("product:entities", function () {
            return API.getProductEntities();
        });


    }
)


