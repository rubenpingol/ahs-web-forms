'use strict';

angular.module('myApp.ptEval', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt-eval', {
    templateUrl: 'components/PTEval/ptEval.html',
    controller: 'ptEvalCtrl'
  });
}])

.controller('ptEvalCtrl', ['$scope', function($scope) {
    $scope.title = "PT Eval";
}]);