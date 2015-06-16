'use strict';

angular.module('webdesignProjects2015', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('guidelines', {
        url: '/',
        templateUrl: 'app/guidelines/guidelines.html',
        controller: 'guidelinesCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('pink');
  })  
;
