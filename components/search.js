angular.module("discowild")
    .component("search", {
        templateUrl: "./components/search.html",
        controller: Search
    })

function Search($scope, $resource) {
    $scope.isTrue = false;
    $scope.checkKey = function($event) {
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            var lab = $resource('https://api.discogs.com/database/search?q=' + $scope.query, AUTH);
            lab.get().$promise.then(function(response) {
                console.log(response);

                var bestResult = response.results[0];
                console.log(bestResult);

                $scope.result = bestResult;
            })
        }
    }
}