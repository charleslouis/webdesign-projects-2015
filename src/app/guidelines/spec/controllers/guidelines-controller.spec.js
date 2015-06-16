'use strict';
describe('Controller: guidelinesCtrl', function () {
// load the controller's module
  beforeEach(module('webdesignProjects2015'));
  var guidelinesCtrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    guidelinesCtrl = $controller('guidelinesCtrl', {
      $scope: scope
    });
  }));
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
