angular.module('register',[])
    .controller('registerctrl',['$scope', '$rootScope','$http', function($scope,$rootscope,$http){

        $scope.submitform =  function(formdata){
            console.log(formdata);
            var url = $rootscope.serverpath;
            $http.post(url, formdata, $rootscope.serverpath)
            .then(
                function(response){
                    
                }
            );

        }
        
    }])