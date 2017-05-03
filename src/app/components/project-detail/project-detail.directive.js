export function projectDetailDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/project-detail/project-detail.html',
    scope: {
      projectDetail: '='
    },
    controller: ProjectDDetailController,
    controllerAs: 'pddc',
    bindToController: true
  };

  return directive;
}

class ProjectDDetailController {
  constructor () {
    'ngInject';
  }
}
