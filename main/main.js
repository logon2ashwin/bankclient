angular.module('bankapp')
    .config(['$routeProvider', '$httpProvider', '$locationProvider', function (routeProvider, $httpProvider, $locationProvider) {
        
        routeProvider

        .when('', {
            redirectTo: '/home'
        })
        .when('/', {
            redirectTo: '/home'
        })
        .when('/home', {
            templateUrl: 'modules/home/index.html',
            controller: 'Homepagectrl'
        })
        .when('/signin', {
            templateUrl: 'modules/institutesignin/index.html',
            controller: 'instituteSigninCtrl'
        })
    }])
    .controller('MainCtrl', ['$scope'])
