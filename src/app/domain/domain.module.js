import { default as Projects } from './Projects.service';

angular.module('domain', [])
    .service('Projects', Projects);

export default 'domain';