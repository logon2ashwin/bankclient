angular.module('login',[])
    .controller('loginctrl',['$scope', '$rootScope','$http', function($scope,$rootscope,$http){

        $scope.login  = function(user){

            var url = $rootscope.serverpath+ 'account/login';
            
            $http.post(url, user, $rootscope.serverpath)
            .then(
                function(response){
                    if(response.status == 'success')
                        // $rootscope.go('/dashboard',response.data._id);
                        window.alert('success');
                    else{
                        window.alert('invalid');
                    }
                }
            );
        }
        
    }])