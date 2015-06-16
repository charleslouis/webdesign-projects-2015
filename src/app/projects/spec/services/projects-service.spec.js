describe('Service: projectsService', function() {
  var projects;
  beforeEach(module('webdesignProjects2015'));
  beforeEach(inject(function(_projectsService_) {
  projects = _projectsService_;
  }));

  it('should attach a list of awesomeThings to the service', function() {
    expect(projects.awesomeThings.length).toBe(3);
  });

});
