describe("Project Detail Directive", function() {

  let $rootScope, $compile, httpBackend,fakedMainResponse;


  //load all modules, including the html template, needed to support the test
  beforeEach(angular.mock.module('projectManagement'));

  beforeEach(inject(function($templateCache,_$compile_,_$rootScope_,$httpBackend) {

    //assign the template to the expected url called by the directive and put it in the cache
    httpBackend=$httpBackend;
    $rootScope = _$rootScope_;
    $compile = _$compile_;

    httpBackend.when('GET', 'app/components/project-detail/project-detail.html').respond(fakedMainResponse);
  }));


  it("Declare", function() {    
    var formElement = angular.element('<project-detail></project-detail>');
    $compile(formElement)($rootScope);
    $rootScope.$digest();
  })

});