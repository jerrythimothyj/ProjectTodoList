export function projectsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/projects/projects.html',
    scope: {
      projects: '=',
      openProject: '&'
    },
    controller: ProjectsController,
    controllerAs: 'pc',
    bindToController: true
  };

  return directive;
}

class ProjectsController {
  constructor () {
    'ngInject';

    this.propertyName = 'name';
    this.reverse = false;

    this.sortBy = function(propertyName) {
        this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
        this.propertyName = propertyName;
    };
  }
}
