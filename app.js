"use strict";

angular.module("discowild", [
    // les dépendances externes
    "ui.router"
])

    .config(function($stateProvider, $urlRouterProvider) {
        var states = [
            {
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
            },

        ];
        $urlRouterProvider.otherwise("/home");
        states.forEach(function(state) {
            $stateProvider.state(state);
        })
    })

;
