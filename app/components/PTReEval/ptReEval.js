'use strict';

angular.module('myApp.ptReEval', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt-reeval', {
    templateUrl: 'components/PTReEval/ptReEval.html',
    controller: 'ptReEvalCtrl'
  });
}])

.controller('ptReEvalCtrl', ['$scope', function($scope) {
    $scope.title = "PT Re-Eval";
}]);