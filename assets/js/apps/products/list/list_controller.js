//ProductManager: new app
// ProductManager.module( 'ProductsApp.List' );
//  the ProductsApp module
//  the List sub-module to the ProductManager

//  module responsible for defining List.Controller
ProductManager.module("ProductsApp.List", function (List, ProductManager, Backbone, Marionette, $, _) {
    //define List.Controller
    List.Controller = {
        //
        listProducts: function () {
            //use request response system to get products from the entities module
            var products = ProductManager.request("product:entities");

            //instantiate a new view for the products
            var productsListView = new List.Products({
                //put products in List.Products collection attribute
                collection: products
            });

            //define event handler itemview:product:delete to delete item
            productsListView.on("itemview:product:delete", function (childView, model) {
                products.remove(model);

            });
            //render the view in region
            ProductManager.mainRegion.show(productsListView);
        }
    }
});
