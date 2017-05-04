export function topStickyDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/top-sticky/top-sticky.html',
    scope: {
        title: '@',
        val: '@'
    },
    controller: TopStickyController,
    controllerAs: 'tsc',
    bindToController: true
  };

  return directive;
}

class TopStickyController {
  constructor () {
    'ngInject';

  }
}
