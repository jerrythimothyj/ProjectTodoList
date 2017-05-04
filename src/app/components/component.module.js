import { navbarDirective } from './navbar/navbar.directive';
import { projectsDirective } from './projects/projects.directive';
import { projectDetailDirective } from './project-detail/project-detail.directive';
import { topStickyDirective } from './top-sticky/top-sticky.directive';


angular.module('component', [])
    .directive('acmeNavbar', navbarDirective)
    .directive('projects', projectsDirective)
    .directive('projectDetail', projectDetailDirective)
    .directive('topSticky', topStickyDirective);

export default 'component';