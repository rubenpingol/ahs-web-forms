'use strict';

angular.module('myApp.ptEvaluation', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt-evaluation', {
    templateUrl: 'components/PTEvaluation/ptEvaluation.html',
    controller: 'ptEvaluationCtrl'
  });
}])

.controller('ptEvaluationCtrl', ['$scope', function($scope) {
    $scope.title = "PT Evaluation";
}]);