angular.module('register',[])
    .controller('registerctrl',['$scope','$routeParams','$rootScope','$http', function($scope,$routeParams,$rootscope,$http){

        $scope.submitform =  function(formdata){
            console.log(formdata);
            var url = $rootscope.serverpath+ 'account';
            $http({
                method: 'GET',
                url: url,
                data: formdata,
                headers: $rootScope.headers
            }).then(function(response){
                    if(response.data.status == 'success'){
                       $rootscope.go('/login');
                    }
                    else{
                        window.alert('invalid credintials');
                    }
                });

        }  

        $scope.initialize = function(){
            if($routeParams.type != 'undefined'){
                $scope.type = $routeParams.type; 
                console.log('type');
            }
        }
        // $scope.initialize();

    }])