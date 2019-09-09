'use strict';

angular.module('myApp.ptReassessment', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt-reassessment', {
    templateUrl: 'components/PTReassessment/ptReassessment.html',
    controller: 'ptReassessmentCtrl'
  });
}])

.controller('ptReassessmentCtrl', ['$scope', function($scope) {
    $scope.title = "PT Reassessment";
}]);