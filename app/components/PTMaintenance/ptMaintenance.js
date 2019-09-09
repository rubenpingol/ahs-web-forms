'use strict';

angular.module('myApp.ptMaintenance', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt-maintenance', {
    templateUrl: 'components/PTMaintenance/ptMaintenance.html',
    controller: 'ptMaintenanceCtrl'
  });
}])

.controller('ptMaintenanceCtrl', ['$scope', function($scope) {
    $scope.title = "PT Maintenance";
}]);