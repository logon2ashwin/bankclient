angular.module('benificiary',[])
    .controller('benificiaryctrl',['$scope', '$rootScope','$http','$routeParams','$modal','Notification', function($scope,$rootScope,$http,$routeParams,$modal,Notification){

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

        $scope.setaccountdetaails = function(id){
            var url = $rootScope.serverpath+ 'account/updateuser';
            $scope.account.benificiery.push(id);
            console.log($scope.account);
            $http({
                method: 'PUT',
                url: url,
                headers: $rootScope.headers,
                data : $scope.account
            }).then(function(response){
                Notification.success('Benificiary Added Successfully')
                $scope.initialize();
            });
        }

        $scope.deletebenificiary = function(index){
            $scope.account.benificiery.splice(index,1);
            var url = $rootScope.serverpath+ 'account/updateuser';
            $http({
                method: 'PUT',
                url: url,
                headers: $rootScope.headers,
                data : $scope.account
            }).then(function(response){
                $scope.initialize();
            });
        }

        $scope.addaccount = function(){
            var addquestionmodal = $modal.open({
                templateUrl: "./modules/models/addaccountmodal.html",
                controller: function ($scope, $rootScope, $modalInstance, $http) {
        
                    $scope.save = function (benificiaryid) {
                        $modalInstance.close({
                            status: "save",
                            data: benificiaryid
                        });
                    }
        
                    $scope.close = function () {
                        $modalInstance.close({
                            status: "cancel",
                            data: {}
                        });
                    }
                    $scope.initialize = function () {
                
                    }
                    $scope.initialize();
                }
            })
            addquestionmodal.result.then(function(res) {
                $scope.setaccountdetaails(res.data);
            });
            
        }



        $scope.initialize=function(){
           $scope.id = $routeParams.id;
           console.log($scope.id);
           $scope.getaccountdetails($scope.id);
        }
        $scope.initialize()
    }])