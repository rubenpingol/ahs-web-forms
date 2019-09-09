'use strict';

angular.module('myApp.ptDischargeSummary', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt-discharge-summary', {
    templateUrl: 'components/PTDischargeSummary/ptDischargeSummary.html',
    controller: 'ptDischargeSummaryCtrl'
  });
}])

.controller('ptDischargeSummaryCtrl', ['$scope', function($scope) {
    $scope.title = "PT Discharge Summary";
}]);