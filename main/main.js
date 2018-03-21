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
    .when('/dashboard/:id', {
        templateUrl: 'modules/dashboard/index.html',
        controller: 'dashboardctrl'
    })
    .when('/register', {
        templateUrl: 'modules/register/index.html',
        controller: 'registerctrl'
    })
    .when('/benificiary/:id', {
        templateUrl: 'modules/benificiary/index.html',
        controller: 'benificiaryctrl'
    })
    .when('/transaction/:id', {
        templateUrl: 'modules/transaction/index.html',
        controller: 'transactionctrl'
    })
    $locationProvider.html5Mode({
        enabled:true,
        requireBase: false
    });
}])
bankapp.controller('MainCtrl', ['$scope'])