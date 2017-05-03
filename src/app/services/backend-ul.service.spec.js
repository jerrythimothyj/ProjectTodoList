describe("Backend UL service", function() {

  let backendUlSer;


  //load all modules, including the html template, needed to support the test
  beforeEach(angular.mock.module('projectManagement'));

  beforeEach(inject(function(_backendUlSer_) {

    //assign the template to the expected url called by the directive and put it in the cache
    backendUlSer = _backendUlSer_;

    // httpBackend.when('GET', 'app/components/projects/projects.html').respond(fakedMainResponse);
  }));

  it ('Backend UL service should be defined', function () {
        expect(backendUlSer).toBeDefined();
    });

  it ('It should retrieve the request URL', function () {
      expect(backendUlSer.get('projects')).toEqual("http://localhost:8000/api/projects");     
      expect(backendUlSer.get('projectDetail')).toEqual("http://localhost:8000/api/projectDetail");     
     });

});