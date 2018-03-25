angular.module('login',[])
    .controller('loginctrl',['$scope', '$rootScope','$http','$modal','Notification', function($scope,$rootScope,$http,$modal,Notification){

        $scope.login  = function(user){

            var url = $rootScope.serverpath+ 'account/login';

            $http({
                method: 'POST',
                url: url,
                data: user,
                headers: $rootScope.headers
            }).then(function(response){
                console.log(response);
                    if(response.data.status == 'success'){
                        Notification.success('login successfull');
                        var id = response.data.id;
                        console.log(id);
                        // $rootscope.go('/dashboard',response.data._id);
                        // window.alert('success');
                        $rootScope.go('/dashboard',response.data.id);
                    }
                    if(response.data.error){
                        Notification.error('Invalid Credentials');
                    }
                });
        }

        $scope.fingerprintmodal = function(){
            // var openfingerprintmodal = $modal.open({
            //     templateUrl: "./modules/models/fingerprint.html",
            //     controller: function ($scope, $rootScope, $modalInstance, $http) {
                    
            //       console.log('aa');
            //     }
            // })
            FingerprintAuth.isAvailable(function (result) {
        
                console.log("FingerprintAuth available: " + JSON.stringify(result));
                // If has fingerprint device and has fingerprints registered
                if (result.isAvailable == true && result.hasEnrolledFingerprints == true) {
                    var encryptConfig = {
                        clientId: "DSMT",
                        username: "raghul",
                        password: "raghul333",
                        maxAttempts: 5,
                        locale: "en_US",
                        dialogTitle: "Hey dude, your finger",
                        dialogMessage: "Put your finger on the device",
                        dialogHint: ""
                    };
                    alert(encryptConfig.username,encryptConfig.password);
                    // Set config and success callback
                    FingerprintAuth.encrypt(encryptConfig, function(_fingerResult){
                        console.log("successCallback(): " + JSON.stringify(_fingerResult));
                        if (_fingerResult.withFingerprint) {
                            console.log("Successfully encrypted credentials.");
                            console.log("Encrypted credentials: " + result.token);  
                        } else if (_fingerResult.withBackup) {
                            console.log("Authenticated with backup password");
                        }
                    // Error callback
                    }, function(err){
                            if (err === "Cancelled") {
                            console.log("FingerprintAuth Dialog Cancelled!");
                        } else {
                            console.log("FingerprintAuth Error: " + err);
                        }
                    });
                }
            }, function (message) {
                console.log("isAvailableError(): " + message);
                alert('No fingerprint sensor detected')
            });
           
        }
        
    }])