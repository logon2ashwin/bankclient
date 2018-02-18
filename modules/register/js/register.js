angular.module('register',[])
    .controller('registerctrl',['$scope','$routeParams','$rootScope','$http', function($scope,$routeParams,$rootscope,$http){

        $scope.submitform =  function(formdata){
            console.log(formdata);
            var url = $rootscope.serverpath+ 'account';
            $http.post(url, formdata, $rootscope.headers)
            .then(
                function(response){
                    if(response.result == 'success')
                        console.log(response.results)
                    if(response.results == 'exists')
                        console.log(response.result)
                }
            );

        }  

        $scope.initialize = function(){
            if($routeParams.type != 'undefined'){
                $scope.type = $routeParams.type; 
                console.log('type');
            }
        }
        // $scope.initialize();

    }])