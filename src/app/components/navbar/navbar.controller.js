'use strict';

angular.module('webdesignProjects2015')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
	$scope.isOpen = false;
	$scope.demo = {
		isOpen: false,
		count: 0,
		selectedAlignment: 'md-left'
	};    
  });
