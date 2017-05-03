export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'app/pages/home/home.html',
      controller: 'HomeController',
      controllerAs: 'hc',
      resolve: {
        projects: function(Projects) {
          return Projects.getProjects();
        }
      }
    })
    .state('project-detail', {
      url: '/project-detail/:sl',
      templateUrl: 'app/pages/project-detail/project-detail.html',
      controller: 'ProjectDetailController',
      controllerAs: 'pdc',
      resolve: {
        projectDetail: function(Projects, $stateParams) {
          return Projects.getProjectDetail($stateParams.sl);
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}
