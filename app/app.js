'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'ngMessages',
  'myApp.ptaVisit1',
  'myApp.ptaVisit2',
  'myApp.ptEval',
  'myApp.ptReEval',
  'myApp.ptReassessment',
  'myApp.ptDischarge',
  'myApp.ptDischargeSummary',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/pt-discharge-summary'});
}])
.controller('mainCtrl', ['$scope', '$mdSidenav', '$location', function($scope, $mdSidenav, $location) {
  let svgIconProvider = "assets/img/icons",
      descriptionSVG = `${svgIconProvider}/description.svg`,
      sideNavId = 'left';

  $scope.toggleSideNav = buildSideNavToggler(sideNavId);
  function buildSideNavToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    }
  }

  $scope.forms = [
    {
      icon: descriptionSVG,
      title: 'PTA Visit 1',
      path: '/pta-visit-1',
      filename: 'PTAVisit_637032796432303350.pdf'
    },
    {
      icon: descriptionSVG,
      title: 'PTA Visit 2',
      path: '/pta-visit-2',
      filename: 'PTVisit_637032796360884307.pdf'
    },
    {
      icon: descriptionSVG,
      title: 'PT Eval',
      path: '/pt-eval',
      filename: 'PTEval_637032796258926838.pdf'
    },
    {
      icon: descriptionSVG,
      title: 'PT Re-Eval',
      path: '/pt-reeval',
      filename: 'PTReEval_637032796305594845.pdf'
    },
    {
      icon: descriptionSVG,
      title: 'PT Reassessment',
      path: '/pt-reassessment',
      filename: 'PTReassessment_637032796386708493.pdf'
    },
    {
      icon: descriptionSVG,
      title: 'PT Discharge',
      path: '/pt-discharge',
      filename: 'PTDischarge_637032796457322868.pdf'
    },
    {
      icon: descriptionSVG,
      title: 'PT Discharge Summary',
      path: '/pt-discharge-summary',
      filename: 'PT_DischargeSummary_637032796410492814.pdf'
    }
  ];

  $scope.selectForm = handleSelectForm();
  function handleSelectForm() {
    return function(path) {
      $location.path(path);
      $mdSidenav(sideNavId).toggle();
    }
  }
}]);