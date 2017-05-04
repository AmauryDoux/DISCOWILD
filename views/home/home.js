"use strict";

angular.module("discowild", ["ngResource"]).component("home", {

    templateUrl: "views/home/home.html",
    controller: Home
});

function Home() {
    console.log("Hello");
    var test = $resource('https://api.discogs.com/artist/2159610');

    console.log(test.get());
}