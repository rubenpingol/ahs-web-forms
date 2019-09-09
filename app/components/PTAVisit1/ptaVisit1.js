'use strict';

angular.module('myApp.ptaVisit1', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pta-visit-1', {
    templateUrl: 'components/PTAVisit1/ptaVisit1.html',
    controller: 'ptaVisit1Ctrl'
  });
}])

.controller('ptaVisit1Ctrl', ['$scope', function($scope) {
    $scope.title = "PTA Visit 1";
}]);