'use strict';
describe('Controller: studentsCtrl', function () {
// load the controller's module
  beforeEach(module('webdesignProjects2015'));
  var studentsCtrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    studentsCtrl = $controller('studentsCtrl', {
      $scope: scope
    });
  }));
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
