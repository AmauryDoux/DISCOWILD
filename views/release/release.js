"use strict";

var app = angular.module("discowild");

app.component("release", {
    templateUrl: "views/release/release.html",
    controller: Release
});

function Release($scope, $resource, $sce, $stateParams) {
    var id = $stateParams.id;
    console.log(id);
    var _this = this;

    $resource("http://api.discogs.com/releases/" + id, AUTH).get().$promise
        .then(function(release) {
            $scope.artistsStr = release.artists.map(function(artist) {
                return artist.name;
            }).join(", ");

            $scope.labelsStr = release.labels.map(function(label) {
                return label.name;
            }).join(", ");

            $scope.genreStr = release.genres.join(", ");

            if (release.styles) $scope.styleStr = release.styles.join(", ");

            var newVids = [];
            release.videos.map(function(video) {
                newVids.push(video);
            });

            for (let i = 0; i < newVids.length; i++) {
                newVids[i].uri = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + newVids[i].uri.split("=")[1]);
            }

            release.videos = newVids;

            console.log(release.videos);
            $scope.release = release;
        });
}