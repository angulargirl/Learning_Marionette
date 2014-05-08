//module responsible for defining views for List.Contact and List.Contacts
ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.Contact = Marionette.ItemView.extend({
    tagName: "li",
    template: "#contact-list-item"
  });

  List.Contacts = Marionette.CollectionView.extend({
    tagName: "ul",
    itemView: List.Contact
  });

    // A Grid Row
    List.Contact = Marionette.ItemView.extend({
        tagName: "tr",
        template: "#contact-list-item",
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
        }

    });

    // A Grid Table
    List.Contacts = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        template: "#contact-list",
        itemView: List.Contact,
        itemViewContainer: "tbody"
    });
});
