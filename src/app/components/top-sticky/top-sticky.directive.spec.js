describe("Top Sticky Directive", function() {

  let $compile, $rootScope, httpBackend,fakedMainResponse;


  //load all modules, including the html template, needed to support the test
  beforeEach(angular.mock.module('projectManagement'));

  beforeEach(inject(function($templateCache,_$compile_,_$rootScope_,$httpBackend) {

    //assign the template to the expected url called by the directive and put it in the cache
    httpBackend=$httpBackend;
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    httpBackend.when('GET', 'app/components/top-sticky/top-sticky.html').respond(fakedMainResponse);
  }));


  it("Declare", function() {    
    var formElement = angular.element('<top-sticky></top-sticky>');
    $compile(formElement)($rootScope);
    $rootScope.$digest();

  })

});