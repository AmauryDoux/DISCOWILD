"use strict";

var app = angular.module("discowild");

app.component("label", {

    templateUrl: "views/label/label.html",
    controller: Label
});

function Label($scope, $resource) {
    var request = $resource('https://api.discogs.com/artists/6378', AUTH); // On initialise la variable avec un resource sur l'url

    request.get().$promise.then(function(artist) { // Dans Data l'objet JSON
        //console.log(artist);
        $scope.artistImg = artist.images[0].uri150;
        $scope.artistMembers = artist.members.name;
    });


    request = $resource('https://api.discogs.com/labels/6378', AUTH); // On initialise la variable avec un resource sur l'url
    request.get().$promise.then(function(label) { // Dans Data l'objet JSON
        //console.log(label); // On peut accéder aux propriétes de l'objet
        $scope.labelName = label.name;
        $scope.labelContact = label.contact_info;
        $scope.labelProfile = label.profile;
        //console.log(label.images);
        if (label.images) {
            $scope.imgScr = label.images[0].uri150;

        } else {

            $scope.imgScr = "http://placehold.it/150x150?text=X";
        };
        $scope.labelSites = label.urls;

    });
    request = $resource('https://api.discogs.com/labels/6378/releases', AUTH); // On initialise la variable avec un resource sur l'url

    request.get().$promise.then(function(release) { // Dans Data l'objet JSON
        console.log(release);
        $scope.labelReleases = release;
        $scope.releaseImg = release.images[0].uri150;

    });
}
