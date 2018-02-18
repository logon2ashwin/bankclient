bankapp.config(['$routeProvider', '$httpProvider', '$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {
        
    $routeProvider

    .when('', {
        redirectTo: '/login'
    })
    .when('/', {
        redirectTo: '/login'
    })
    .when('/login', {
        templateUrl: 'modules/login/index.html',
        controller: 'loginctrl'
    })
    .when('/dashboard', {
        templateUrl: 'modules/dashboard/index.html',
        // controller: 'registerctrl'
    })
    .when('/register', {
        templateUrl: 'modules/register/index.html',
        controller: 'registerctrl'
    })
    $locationProvider.html5Mode({
        enabled:true,
        requireBase: false
    });
}])
bankapp.controller('MainCtrl', ['$scope'])