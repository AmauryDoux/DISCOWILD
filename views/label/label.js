"use strict";

var app = angular.module("discowild");

app.component("label", {

    templateUrl: "views/label/label.html",
    controller: Label
});

function Label($scope, $resource) {
    var request = $resource('https://api.discogs.com/labels/42701'); // On initialise la variable avec un resource sur l'url
    request.get().$promise.then(function(label) { // Dans Data l'objet JSON
        console.log(label); // On peut accéder aux propriétes de l'objet
        $scope.labelName = label.name;
        $scope.labelProfile = label.profile;
        $scope.labelImg = label.images[0].uri150;
        $scope.artistSites = artist.urls;
        $scope.artistMembers = artist.members;
    });
}


