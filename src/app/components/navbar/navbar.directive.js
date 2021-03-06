export function navbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'nc',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor () {
    'ngInject';

  }
}
