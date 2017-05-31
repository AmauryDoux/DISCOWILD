"use strict";

var defaultArtists = [
    976494, // Chinese man
    6378, // Gorillaz
    609563, // Paramore
    2159610, // TSR
    1003, // Muse
    2770, // Air
    50513, // Dr. Dre
    80395, // Blink-182
    92476, // RHCP
    2669201 // Stand High Patrol
];

var artistsData = [];

var app = angular.module("discowild");

app.component("home", {
    templateUrl: "views/home/home.html",
    controller: Home
});

function Home($scope, $resource) {
    var _this = this;

    for (let i = 0; i < defaultArtists.length; i++) {
        let request = $resource('https://api.discogs.com/artists/' + defaultArtists[i], AUTH);
        // On initialise la variable avec un resource sur l'url

        request.get().$promise.then(function(artist) { // Dans artist l'objet JSON que l'on récupére
            let options = "?sort=year&sort_order=desc&page=1&per_page=3"
            let releasesRequest = $resource('https://api.discogs.com/artists/' + defaultArtists[i] + "/releases" + options, AUTH);

            releasesRequest.get().$promise.then(function(releases) {
                artist.releases = releases.releases; // On prend ses 3 derniers sons
            });

            artistsData.push(artist);
        });
    }

    $scope.artistsData = artistsData;
    $scope.numberOfMembers = function(artist) {
        var n = 0;
        for (let i = 0; i < artist.members.length; i++) {
            if (artist.members[i].active) n++;
        }
        return n;
    }
}