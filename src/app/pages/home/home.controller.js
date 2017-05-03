export class HomeController {
  constructor ($state, projects) {
    'ngInject';

    this.$state = $state;
    this.projects = projects.data;
  }

  openProject(sl) {
    this.$state.go('project-detail', {sl});
  }
}