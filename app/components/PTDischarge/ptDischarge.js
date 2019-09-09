'use strict';

angular.module('myApp.ptDischarge', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt-discharge', {
    templateUrl: 'components/PTDischarge/ptDischarge.html',
    controller: 'ptDischargeCtrl'
  });
}])

.controller('ptDischargeCtrl', ['$scope', function($scope) {
    $scope.title = "PT Discharge";
}]);