"use strict";


var app = angular.module("discowild", ["ui.router", "ngResource"]);

app.config(function($stateProvider, $urlRouterProvider) {
    var states = [{
            name: "home",
            url: "/home",
            component: "home"
        },
        {
            name: "artist",
            url: "/artist",
            component: "artist"
        },
        {
            name: "release",
            url: "/release",
            component: "release"
        },
        {
            name: "label",
            url: "/label",
            component: "label"
        }
    ];
    $urlRouterProvider.otherwise("/home"); // Page par défaut
    states.forEach(function(state) {
        $stateProvider.state(state);
    });
});