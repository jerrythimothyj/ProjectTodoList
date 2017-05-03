export default class Projects {
    constructor($http, backendUlSer) {
        'ngInject';

        this.$http = $http;
        this.backendUlSer=backendUlSer; 
    }

    getProjects() {
        return this.$http.get(this.backendUlSer.get('projects'));
    }

    getProjectDetail(sl) {
        // return this.$http.get(this.backendUlSer.get('project')+'?sl='+sl);
        return this.$http.get(this.backendUlSer.get('projectDetail')+'?sl='+sl);
    }
}
