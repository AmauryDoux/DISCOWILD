"use strict";

var defaultArtists = [
    976494, // Chinese man
    609563, // Paramore
    6378, // Gorillaz
    2159610, // TSR
    1003, // Muse
    2770, // Air
    50513, // Dr. Dre
    80395, // Blink-182
    92476, // RHCP
    2669201 // Stand High Patrol
];

var app = angular.module("discowild");

app.component("home", {
    templateUrl: "views/home/home.html",
    controller: Home
});

function Home($scope, $resource) {
    var home = this;
    var artist = $resource('https://api.discogs.com/artists/2159610'); // On initialise la variable avec un resource sur l'url
    artist.get().$promise.then(function(data) { // Dans Data l'objet JSON
        console.log("Hello " + data.name); // On peut accéder aux propriétes de l'objet
        home.name = data.name;
    });
}