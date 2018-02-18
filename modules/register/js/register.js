angular.module('register',[])
    .controller('registerctrl',['$scope', '$rootScope','$http', function($scope,$rootscope,$http){

        $scope.submitform =  function(formdata){
            console.log(formdata);
            var url = $rootscope.serverpath+ 'account';
            $http.post(url, formdata, $rootscope.serverpath)
            .then(
                function(response){
                    if(response.results == 'success')
                        console.log(response.results)
                    else
                        console.log(response)
                }
            );

        }
        
    }])