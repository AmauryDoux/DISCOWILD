"use strict";

var app = angular.module("discowild");

app.component("artist", {


    templateUrl: "views/artist/artist.html",
    controller: Artist
});

function Artist($scope, $resource, $stateParams) {
    var id = $stateParams.id;

    var request = $resource('https://api.discogs.com/artists/' + id, AUTH); // On initialise la variable avec un resource sur l'url

    request.get().$promise.then(function(artist) { // Dans Data l'objet JSON
        //console.log(artist);
        $scope.artistName = artist.name;
        $scope.artistProfile = artist.profile;
        $scope.artistImg = artist.images[0].uri150;
        $scope.artistSites = artist.urls;
        $scope.artistMembers = artist.members;


    });
    request = $resource('https://api.discogs.com/artists/" + id +"/releases', AUTH); // On initialise la variable avec un resource sur l'url
    request.get().$promise.then(function(releases) { // Dans Data l'objet JSON
        $scope.releasesArr = releases.releases;
        $scope.releasesLabel = releases.label;
        $scope.releasesImg = releases.thumb;
        $scope.releasesTitle = releases.title;
        $scope.releasesType = releases.type;
        $scope.releasesYear = releases.year;

        console.log(releases);
    });

}