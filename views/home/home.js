"use strict";

var app = angular.module("discowild");

app.component("home", {

    templateUrl: "views/home/home.html",
    controller: Home
});

function Home($scope, $resource) {
    var artiste = $resource('https://api.discogs.com/artists/2159610'); // On initialise la variable avec un resource sur l'url
    test.get().$promise.then(function(data) { // Dans Data l'objet JSON
        console.log("Hello " + data.name); // On peut accéder aux propriétes de l'objet
    });
}