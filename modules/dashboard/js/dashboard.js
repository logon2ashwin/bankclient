angular.module('dashboard',[])
    .controller('dashboardctrl',['$scope', '$rootScope','$http','$routeParams', function($scope,$rootScope,$http,$routeParams){

        $scope.getaccountdetails = function(id){
            var url = $rootScope.serverpath+ 'account/accountdetails?id='+id;
            $http({
                method: 'GET',
                url: url,
                headers: $rootScope.headers
            }).then(function(response){

                if(response.data.status == 'success'){
                    $scope.accountdetails = response.data.data;
                }
                
            });
        }

        $scope.initialize=function(){
            $scope.accid = $routeParams.id;

            $scope.getaccountdetails($scope.accid);

        }
        $scope.initialize()
    }])