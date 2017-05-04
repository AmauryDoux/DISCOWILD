"use strict";

var app = angular.module("discowild");

app.component("artist", {


    templateUrl: "views/artist/artist.html",
    controller: Artist
});

function Artist($scope, $resource) {
    var request = $resource('https://api.discogs.com/artists/976494',AUTH); // On initialise la variable avec un resource sur l'url

    request.get().$promise.then(function(artist) { // Dans Data l'objet JSON
    console.log(artist);
        $scope.artistName = artist.name;
        $scope.artistProfile = artist.profile;
        $scope.artistImg = artist.images[0].uri150;
        $scope.artistSites = artist.urls;
        $scope.artistMembers = artist.members;
    });
}



//console.log("Hello " + artist.name); // On peut accéder aux propriétes de l'objet
