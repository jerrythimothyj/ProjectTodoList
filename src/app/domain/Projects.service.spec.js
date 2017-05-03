describe("Projects service", function() {

  let httpBackend, Projects;


  //load all modules, including the html template, needed to support the test
  beforeEach(angular.mock.module('projectManagement'));

  beforeEach(inject(function(_Projects_, $templateCache,_$rootScope_,$httpBackend) {

    //assign the template to the expected url called by the directive and put it in the cache
    Projects = _Projects_;
    httpBackend=$httpBackend;

    // httpBackend.when('GET', 'app/components/projects/projects.html').respond(fakedMainResponse);
  }));

  it ('Projects service should be defined', function () {
        expect(Projects).toBeDefined();
    });

  it ('Projects service get projects', function () {
      let projectsData = [
        {
            "sl": 1,
            "name": "Apple",
            "status": "1"
        },
        {
            "sl": 2,
            "name": "Banana",
            "status": "0"
        },
        {
            "sl": 3,
            "name": "Carrot",
            "status": "1"
        }

    ];
       httpBackend.when('GET','http://localhost:8000/api/projects').respond(projectsData);
       Projects.getProjects()
       .then(function(data){
          expect(data).toEqual(projectsData);
       }); 
  });

  it ('Projects service get one project', function () {
      let projectsData ={
            "sl": 1,
            "name": "Apple",
            "status": "1",
            "tech_stack": ["AngularJS", "NodeJS", "HTML5", "CSS3", "Javascript"],
            "team": ["Kurt", "Sean", "Kathy", "John"]
        };
       httpBackend.when('GET','http://localhost:8000/api/projectDetail').respond(projectsData);
       Projects.getProjectDetail(1)
       .then(function(data){
          expect(data).toEqual(projectsData);
       }); 
  });

});