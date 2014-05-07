ContactManager.module("Entities",
    function (Entities, ContactManager, Backbone, Marionette, $, _) {
        //private no attachment to module
        var alertPrivate = function () {
            alert('private function');
        };


        //by attaching a method to the module, it becomes public
        Entities.alertPublic = function () {
            alertPrivate();
            alert('public function');
        };

    }
)


