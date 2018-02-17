var dependencies = [
    // controllers here
    'ngRoute',
    'login'
]


var bankapp = angular.module('bankapp', dependencies)


bankapp.run(["$rootScope", "$location",function($rootScope, $location,){

    $rootScope.go = function (path) {
        $location.path(path);
    };  

}])
