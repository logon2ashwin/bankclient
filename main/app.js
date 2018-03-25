var dependencies = [
    // controllers here
    'ui.bootstrap',
    'ui-notification',
    'ngRoute',
    'login',
    'register',
    'dashboard',
    'benificiary',
    'transaction'
]


var bankapp = angular.module('bankapp', dependencies)


bankapp.run(["$rootScope", "$location",function($rootScope, $location){

    $rootScope.headers = {
        'Content-Type' : 'application/json'
    }
    $rootScope.serverpath = 'http://localhost:3002/';

    $rootScope.go = function (path, value) {
        if(value){
            path = path + "/" + value;
        }
        $location.path(path);
    };

}])
