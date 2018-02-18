angular.module('login',[])
    .controller('loginctrl',['$scope', '$rootScope','$http', function($scope,$rootScope,$http){

        $scope.login  = function(user){

            var url = $rootScope.serverpath+ 'account/login';

            $http({
                method: 'POST',
                url: url,
                data: user,
                headers: $rootScope.headers
            }).then(function(response){
                    if(response.data.status == 'success'){
                        var id = response.data.id;
                        console.log(id);
                        // $rootscope.go('/dashboard',response.data._id);
                        // window.alert('success');
                        $rootScope.go('/dashboard',response.data.id);
                    }
                    else{
                        window.alert('invalid');
                    }
                });
        }
        
    }])