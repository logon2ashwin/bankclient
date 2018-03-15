angular.module('login',[])
    .controller('loginctrl',['$scope', '$rootScope','$http','$modal', function($scope,$rootScope,$http,$modal){

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

        $scope.fingerprintmodal = function(){
            var openfingerprintmodal = $modal.open({
                templateUrl: "./modules/models/fingerprint.html",
                controller: function ($scope, $rootScope, $modalInstance, $http) {
                    
                  console.log('aa');
                }
            })
        }
        
    }])