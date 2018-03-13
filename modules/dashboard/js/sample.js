$scope.openquestionmodal = function (qsn) {

    var addquestionmodal = $modal.open({
        templateUrl: "root/partials/addquestionmodal.html",
        resolve: {
            data: function () {
                return qsn;
            }
        },
        controller: function ($scope, $rootScope, data, $modalInstance, $http, configservice) {

            $scope.save = function (question) {
                if (!question._id && typeof question.answer!='undefined')
                    question.answer = question.answer.split(',');

                $modalInstance.close({
                    status: "save",
                    data: question
                });
            }

            $scope.close = function () {
                $modalInstance.close({
                    status: "cancel",
                    data: {}
                });
            }
            $scope.initialize = function () {
                if (data)
                    $scope.question = data;
            }
            $scope.initialize();
        }
    })

    addquestionmodal.result.then(function (res) {
        if (res.status == 'save') {
            var data = {};
            if (!res.data._id) {
                data.questions = res.data;
                data.id = $scope.id;
                data.savetojob = true;
                $scope.savequestions(data);
            } else {
                $scope.updateqsn(res.data);
            }
        }

    })
}