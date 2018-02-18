angular.module('register',[])
    .controller('registerctrl',['$scope','$routeParams','$rootScope','$http', function($scope,$routeParams,$rootScope,$http){

        $scope.submitform =  function(formdata){
            console.log(formdata);
            var url = $rootScope.serverpath+ 'account';
            $http({
                method: 'POST',
                url: url,
                data: formdata,
                headers: $rootScope.headers
            }).then(function(response){
                    if(response.data.result == 'success'){
                       $rootScope.go('/login');
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