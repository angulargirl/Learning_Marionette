//module responsible for defining views for List.Product and List.Products
ProductManager.module("ProductsApp.List", function(List, ProductManager, Backbone, Marionette, $, _){
  List.Product = Marionette.ItemView.extend({
    tagName: "li",
    template: "#product-list-item"
  });

  List.Products = Marionette.CollectionView.extend({
    tagName: "ul",
    itemView: List.Product
  });

    // A Grid Row
    List.Product = Marionette.ItemView.extend({
        tagName: "tr",
        template: "#product-list-item",
        events: {//highlight the row that is clicked
            "click": "highlightName",
            "click button": "clickDelete"
        },

        highlightName: function(e){
            // use the jquery event object
            //Prevent a link from opening the URL & causing a refresh
            e.preventDefault();

            //this view instance's el element
            this.$el.toggleClass("warning");
        },

        clickDelete: function(e){
            alert("Button click causes row to highlight " +
                "after this message cause the listener is " +
                "on tr element. Next we need to hide the click " +
                "event from Parent Dom Element using jquery's stop " +
                "propagation. UnComment next codeline to see in action.");
            e.stopPropagation();
            // each item keeps a reference to the parent collection: this.model.collection
            this.model.collection.remove(this.model);
        }

    });

    // A Grid Table
    List.Products = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        template: "#product-list",
        itemView: List.Product,
        itemViewContainer: "tbody"
    });
});
