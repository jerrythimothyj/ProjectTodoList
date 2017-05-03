import { HomeController } from '../pages/home/home.controller';
import { ProjectDetailController } from '../pages/project-detail/project-detail.controller';

angular
    .module('pages', [])
    .controller('HomeController', HomeController)
    .controller('ProjectDetailController', ProjectDetailController)

export default 'pages';