/**
 * Created by HF on 30/6/2016.
 */

var express = require("express");
var app = express();
var public = __dirname + "/public";

app.use(express.static(public));
app.use(express.static(__dirname + "/bower_components"));

app.get("/register",function (req,res) {
        var name = req.query.name;
        var contact = req.query.contact;
        var email= req.query.email;
        var pax = req.query.pax;
        var smoking = req.query.smoking;
        var amenities = req.query.amenities;
        var request = req.query.request;

        console.info(req.query);
        res.status(200).end();

});

app.get("/thankyou", function(req , res) {
    res.redirect("thankyou1.html");
});

app.use(function (req,res) {
    console.info("FILE NOT FOUND IN PUBLIC: %s", req.originalUrl);

    res.redirect("/error.html");
});

var port = process.argv[2] || 3000;
app.set("port", port);
app.listen(app.get("port"), function () {
    console.info("Web server started on port %d", app.get("port"));
});