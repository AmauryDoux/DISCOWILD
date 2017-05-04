"use strict";

var app = angular.module("discowild");

app.component("artist", {


    templateUrl: "views/artist/artist.html",
    controller: Artist
});

function Artist($scope, $resource) {
    var artist = $resource('https://api.discogs.com/artists/2159610'); // On initialise la variable avec un resource sur l'url

    artist.get().$promise.then(function(data) { // Dans Data l'objet JSON


        console.log("Hello " + data.name); // On peut accéder aux propriétes de l'objet

    });
}
