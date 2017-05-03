import { default as backendUlSer } from './backend-ul.service';


angular.module('services', [])
    .service('backendUlSer', backendUlSer)

export default 'services';