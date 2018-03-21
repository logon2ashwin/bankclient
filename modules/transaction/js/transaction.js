angular.module('transaction',[])
    .controller('transactionctrl',['$scope', '$rootScope','$http','$routeParams','$modal', function($scope,$rootScope,$http,$routeParams,$modal){

        $scope.getaccountdetails = function(id){
            var url = $rootScope.serverpath+ 'account/accountdetails?id='+id;
            $http({
                method: 'GET',
                url: url,
                headers: $rootScope.headers
            }).then(function(response){
                $scope.account = response.data.data[0];
                console.log($scope.account);
            });
        }



        $scope.initialize=function(){
           $scope.id = $routeParams.id;
           console.log($scope.id);
           $scope.getaccountdetails($scope.id);
        }
        $scope.initialize()
    }])