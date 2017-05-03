export default class backendUlSer {
    constructor(){
        'ngInject';

        this.allApi =  {
            baseUrl:'http://localhost:8000/api/',
            projects:'projects',
            projectDetail:'projectDetail'
        };
    }


    get(key, obj) {
        let reqURl = this.allApi.baseUrl + this.allApi[key];
        obj = obj ? obj : {};
        
        return  reqURl;
    }
}