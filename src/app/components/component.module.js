import { navbarDirective } from './navbar/navbar.directive';
import { projectsDirective } from './projects/projects.directive';
import { projectDetailDirective } from './project-detail/project-detail.directive';


angular.module('component', [])
    .directive('acmeNavbar', navbarDirective)
    .directive('projects', projectsDirective)
    .directive('projectDetail', projectDetailDirective);

export default 'component';