"use strict";

var app = angular.module("discowild");

app.component("label", {

    templateUrl: "views/label/label.html",
    controller: Label
});

function Label($scope, $resource, $stateParams) {
    var id = $stateParams.id;
    var request = $resource('https://api.discogs.com/artists/' + id, AUTH); // On initialise la requete  avec un resource sur l'url

    request = $resource('https://api.discogs.com/labels/' + id, AUTH);
    request.get().$promise.then(function(label) {
        $scope.labelName = label.name;
        $scope.labelContact = label.contact_info;
        $scope.labelProfile = label.profile;
        $scope.labelMembers = label.groups;
        if (label.images) {
            $scope.imgScr = label.images[0].uri150;

        } else {

            $scope.imgScr = "http://placehold.it/150x150?text=X";
        };
        $scope.labelSites = label.urls;
    });

    request = $resource('https://api.discogs.com/labels/' + id + '/releases', AUTH);
    request.get().$promise.then(function(release) {
        console.log(release);
        $scope.labelReleases = release.releases;
    });
}