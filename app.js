"use strict";
const AUTH = { key: "AAoLKTHGZuopVNjzgtQl", secret: "nKmgVgSeMKlqYzyxpGVEDmwcLjPYrgak" };

var app = angular.module("discowild", ["ui.router", "ngResource"]);

app.config(function($stateProvider, $urlRouterProvider) {
    var states = [{
            name: "home",
            url: "/home",
            component: "home"
        },
        {
            name: "artist",
            url: "/artist/:id",
            component: "artist"
        },
        {
            name: "release",
            url: "/release/:id",
            component: "release"
        },
        {
            name: "label",
            url: "/label/:id",
            component: "label"
        }
    ];
    $urlRouterProvider.otherwise("/home"); // Page par défaut
    states.forEach(function(state) {
        $stateProvider.state(state);
    });
});