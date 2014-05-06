ContactManager.module("Entities",
    function (Entities, ContactManager, Backbone, Marionette, $, _) {
        var alertPrivate = function () {
            alert('private function');
        };
        Entities.alertPublic = function () {
            alertPrivate();
            alert('public function');
        };

    }
)


