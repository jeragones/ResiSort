
var app = angular.module('appResiSort', []);

app.controller('InformationCtrl', function($http) {
    //this.opCareer = ["hola", "mundo", "Nicoya", "Gradual"];
    /*this.slcCareer = this.opCareer[0];*/
    
    $http.get('/ng/api/careers')
        .success(function(data) {
            
            this.opCareer = data;
            alert("msg 1: "+this.opCareer);
            //this.slcCareer = data[0];
        });
    alert("msg 2: "+this.opCareer);
});