angular.module('register',[])
    .controller('registerctrl',['$scope','$routeParams','$rootScope','$http','Notification', function($scope,$routeParams,$rootScope,$http,Notification){

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
                        Notification.success('Registered Successfully');
                       $rootScope.go('/login');
                    }
                    else{
                        Notification.error('invalid credintials');
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