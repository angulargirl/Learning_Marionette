//instantiate a new app
var ProductManager = new Marionette.Application();

ProductManager.addRegions({
    mainRegion: "#main-region"
});


ProductManager.on("initialize:after", function () {
    //theapp.theModule.theModule.theControllerObject.thefunction
    //call controller
    ProductManager.ProductsApp.List.Controller.listProducts();
    console.log('ProductManager.ProductsApp.List',ProductManager.ProductsApp.List);
    console.log('ProductsApp.List.Controller',ProductsApp.List.Controller);

});