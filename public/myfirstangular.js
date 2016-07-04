/**
 * Created by HF on 30/6/2016.
 */
(function () {

    var MyFirstApp = angular.module("MyFirstApp", []);

    var MyFirstCtrl = function ($http, $window) {
        var ctrl = this;
        ctrl.name = "";
        ctrl.contact = "";
        ctrl.contactPattern = /^[0-9]{8}$/;
        ctrl.email = "";
        ctrl.pax = 1;
        ctrl.request = "";
        ctrl.amenities = {
            pool: false,
            wifi: false,
            tv: false,
            inRoomDining: false
        };
        ctrl.smoking = "no";
        ctrl.status = {
            message: "",
            code: 0
        };

        ctrl.submit = function () {
            console.info("name: %s", ctrl.name);
            console.info("contact: %d", ctrl.contact);
            console.info("email: %s", ctrl.email);
            console.info("pax: %s", ctrl.pax);
            console.info("smoking: %s", ctrl.smoking);

            for (var i in ctrl.amenities) {
                console.info("%s: %s", i, ctrl.amenities);
            }

            console.info("special request: %s", ctrl.request);


            $http.get("/register", {
                params: {
                    name: ctrl.name,
                    contact: ctrl.contact,
                    email: ctrl.email,
                    pax: ctrl.pax,
                    smoking: ctrl.smoking,
                    amenities: ctrl.amenities,
                    request: ctrl.request
                }
            }).then(function () {
                console.info("Success");
                ctrl.status.code = 202;
                $window.location = '/thankyou';
            }).catch(function () {
                console.info("Error");
                ctrl.status.message = "Your registration failed";
                ctrl.status.code = 400;
            })

        };
    };

    MyFirstApp.controller("MyFirstCtrl", ["$http", "$window", MyFirstCtrl]);
})();