'use strict';

angular.module('myApp.ptaVisit2', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pta-visit-2', {
    templateUrl: 'components/PTAVisit2/ptaVisit2.html',
    controller: 'ptaVisit2Ctrl'
  });
}])

.controller('ptaVisit2Ctrl', ['$scope', function($scope) {
    $scope.title = "PTA Visit 2";
}]);