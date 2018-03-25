angular.module('dashboard',[])
    .controller('dashboardctrl',['$scope', '$rootScope','$http','$routeParams','$modal','Notification', function($scope,$rootScope,$http,$routeParams,$modal,Notification){

        $scope.getaccountdetails = function(id){
            var url = $rootScope.serverpath+ 'account/accountdetails?id='+id;
            $http({
                method: 'GET',
                url: url,
                headers: $rootScope.headers
            }).then(function(response){
                $scope.customer = response.data.data[0];
                console.log($scope.customer);
            });
        }
        $scope.logout = function(){
            location.href = '/login';
        }
       
        $scope.changemodal = function(param){
            var addquestionmodal = $modal.open({
                templateUrl: "./modules/models/changemodal.html",
                resolve: {
                   parameter : function(){
                       return {
                        params : param,
                        id : $scope.userid
                       }
                   }
                },
                controller: function ($scope, $rootScope, $modalInstance, $http, parameter) {
                    $scope.save = function (value) {
                        if($scope.param != 'email') 
                            value = parseInt(value);
                        var options = {
                            _id : $scope._id
                        };
                        options[$scope.param] = value;
                         console.log(options);
                         
                        var url = $rootScope.serverpath+ 'account/updateuser';
                        $http({
                            method: 'PUT',
                            url: url,
                            data: options,
                            headers: $rootScope.headers
                        }).then(function(response){
                                if(response.status == 200){ 
                                   $scope.close()
                                   Notification.success('Update successfull');
                                }
                                else{
                                    Notification.error('failed to update');
                                }
                            });
                    }
        
                    $scope.close = function () {
                        $modalInstance.close({
                            status: "cancel",
                            data: {}
                        });
                    }
                    $scope.initialize = function () {
                     $scope.param = parameter.params;
                     $scope._id = parameter.id;
                    }
                    $scope.initialize();
                }
            })
        }

        $scope.dsmt = function(){
            var dsmtmodal = $modal.open({
                templateUrl: "./modules/models/dsmt.html",
                resolve: {
                   parameter : function(){
                       return $scope.customer;
                   }
                },
                controller: function ($scope, $rootScope, $modalInstance, $http, parameter) {
        
                    $scope.save = function (from,to,amount) {
                        console.log(from,to,amount);
                        var transaction = {
                            transactionamount : amount,
                            fromaccountid : from,
                            toaccountid : to
                        }
                        var url = $rootScope.serverpath+ 'transactions';
                        $http({
                            method: 'POST',
                            url: url,
                            data: transaction,
                            headers: $rootScope.headers
                        }).then(function(response){
                            if(response.status == 200){
                                $scope.close();
                                Notification.success('Transfer Successfull');
                            }
                        });
                    }
        
                    $scope.close = function () {
                        $modalInstance.close({
                            status: "cancel",
                            data: {}
                        });
                    }
                    $scope.initialize = function () {
                        $scope.currentuser  = parameter;
                        console.log($scope.currentuser);
                    }
                    $scope.initialize();
                }
            })
            dsmtmodal.result.then(function(){
                $scope.initialize();
            })
        }

        $scope.instanttransfer = function(){
            var dsmtmodal = $modal.open({
                templateUrl: "./modules/models/instanttransfer.html",
                resolve: {
                   parameter : function(){
                       return $scope.customer;
                   }
                },
                controller: function ($scope, $rootScope, $modalInstance, $http, parameter) {
        
                    $scope.save = function (from,to,amount) {
                        console.log(from,to,amount);
                        var transaction = {
                            transactionamount : amount,
                            fromaccountid : from,
                            toaccountid : to
                        }
                        var url = $rootScope.serverpath+ 'transactions';
                        $http({
                            method: 'POST',
                            url: url,
                            data: transaction,
                            headers: $rootScope.headers
                        }).then(function(response){
                            if(response.status == 200){
                                $scope.close();
                                Notification.success('Transfer Successfull');
                            }
                        });
                    }
        
                    $scope.close = function () {
                        $modalInstance.close({
                            status: "cancel",
                            data: {}
                        });
                    }
                    $scope.initialize = function () {
                        $scope.currentuser  = parameter;
                        console.log($scope.currentuser);
                    }
                    $scope.initialize();
                }
            })
            dsmtmodal.result.then(function(){
                $scope.initialize();
            })
        }
        
        $scope.initialize=function(){
            $scope.userid = $routeParams.id;
            $scope.getaccountdetails($scope.userid)
        }
        $scope.initialize()
    }])