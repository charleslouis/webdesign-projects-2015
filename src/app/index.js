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
        url: '/guidelines',
        templateUrl: 'app/guidelines/guidelines.html',
        controller: 'guidelinesCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'aboutCtrl'
      })
      .state('students', {
        url: '/students',
        templateUrl: 'app/students/students.html',
        controller: 'studentsCtrl'
      });


    $urlRouterProvider.otherwise('/');
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('pink');
  })  
;
