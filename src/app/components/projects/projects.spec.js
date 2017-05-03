describe("Projects Directive", function() {

  let $rootScope, $compile, httpBackend,fakedMainResponse;


  //load all modules, including the html template, needed to support the test
  beforeEach(angular.mock.module('projectManagement'));

  beforeEach(inject(function($controller, $templateCache,_$compile_,_$rootScope_,$httpBackend) {

    //assign the template to the expected url called by the directive and put it in the cache
    httpBackend=$httpBackend;
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    // scope = $rootScope.$new();

    httpBackend.when('GET', 'app/components/projects/projects.html').respond(fakedMainResponse);

    // ProjectsController = $controller('ProjectsController',{$scope: scope});

  }));


  it("Declare", function() {    
    var formElement = angular.element('<projects></projects>');
    $compile(formElement)($rootScope);
    $rootScope.$digest();
  })

  // it('ProjectsController should be defined', function () {
  //     expect(ProjectsController).toBeDefined();
  // });

});