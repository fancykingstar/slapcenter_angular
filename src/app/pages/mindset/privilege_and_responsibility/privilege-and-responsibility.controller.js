(function () {
    'use strict';

    angular
        .module('app.pages.mindset')
        .controller('PrivilegeAndResponsibilityController', PrivilegeAndResponsibilityController);

    /* @ngInject */
    function PrivilegeAndResponsibilityController($scope, $state, $timeout, pageService, userService, stepService, activeStep) {

        var answersList = [];

        angular.extend($scope, activeStep.model, {
            options: [
                {
                    code: 1,
                    label: 'My primary driver'
                },
                {
                    code: 2,
                    label: 'Very important to me'
                },
                {
                    code: 3,
                    label: 'Neutral'
                },
                {
                    code: 4,
                    label: 'Not important to me'
                }
            ],
            forward: false,
            sendData:sendData
        });

        $scope.availableOptions = [
            {
                code: 2,
                label: 'Very important to me'
            },
            {
                code: 3,
                label: 'Neutral'
            },
            {
                code: 4,
                label: 'Not important to me'
        }];
        $scope.notifications = [];
        checkShowBlockStatus();
        if ($scope.businessName === null) {
            $scope.businessName = _.get(userService, 'user.businessName');
        }

        $scope.checkDropdownModels = checkDropdownModels;

        $timeout(checkFormModels);

        // --- vars ---

        pageService
            .reset()
            .setShowBC(false)
            .addCrumb({name: 'Dashboard', path: 'home'})
            .setPageTitle('Privilege and Responsibility');

        userService.getUser().then(function (user) {
            if (!_.isEmpty(user)) {
                $scope.data.businessName = user.businessName;
            }
        });

        function checkShowBlockStatus(){
            
            if(($scope.data.first == 'My primary driver')
                || ($scope.data.second == 'My primary driver')
                || ($scope.data.third == 'My primary driver')
                || ($scope.data.fourth == 'My primary driver')){
                    
                $scope.showInfoBlock = true;
                $scope.forward = true;
            }
            else{
                $scope.notifications = [{name: 'Missing Primary Driver', type: 'error', message: 'Please select at least one Primary Driver', show: true}];
                $scope.showInfoBlock = false;
                $scope.forward = false;
            }
        }
        function sendData(direction) {

            if (_.isEmpty($scope.data.text)) {
                return false;
            }

            var urls = activeStep.sref.split('.');
            stepService.updateActiveModel($scope);
            stepService.setFinishActiveStep();

            var nextprevStep = stepService.getNextAndPrevStep();

            var data = angular.extend({}, {
                first: $scope.data.first,
                second: $scope.data.second,
                third: $scope.data.third,
                fourth: $scope.data.fourth,
                text: $scope.data.text,
                additionalText: $scope.data.additionalText,
                result: $scope.data.result,
                resultId: $scope.data.resultId
            });

            return stepService.sendApiData(urls[urls.length - 1], data)
                .then(function () {
                    if(direction == 'forward')  
                        $state.go(nextprevStep.nextStep.sref); 
                    else
                        $state.go(nextprevStep.prevStep.sref);
                });
        }


        function checkDropdownModels(model, result, changedItem) {
            if (model === 'My primary driver') {
                $scope.showInfoBlock = true;
                findPrimaryLabel();
            } else {
                checkShowBlockStatus();
            }

            // if (_.indexOf(answersList, model) === -1) {
            //     answersList.push(model);
            //     $scope.showNotice = false;
            //     $scope.notifications = [];
            // } else {
                // $scope.notifications = [{name: 'Missing Primary Driver', type: 'error', message: 'Please select at least one Primary Driver', show: true}];
                // $scope.showInfoBlock = false;
            // }

            checkFormModels();
        }

        function checkFormModels() {

            if (!_.isEmpty($scope.data.first) && !_.isEmpty($scope.data.second) && !_.isEmpty($scope.data.third) && !_.isEmpty($scope.data.fourth)) {

                if (findDuplicate()) {
                    $scope.showInfoBlock = true;
                    $scope.notifications = [];
                    findPrimaryLabel();
                    $scope.forward = true;
                }
            }
        }

        function findPrimaryLabel() {
            var resultList = _.cloneDeep($scope.options);
            resultList = _.reverse(resultList);

            _.each(resultList, function (value) {

                if ($scope.data.first === value.label) {
                    $scope.data.result = 'provide for my family';
                    $scope.data.resultId = '0';
                    return true;
                }

                if ($scope.data.second === value.label) {
                    $scope.data.result = 'create jobs';
                    $scope.data.resultId = '1';
                    return true;
                }

                if ($scope.data.third === value.label) {
                    $scope.data.result = 'give more to my community';
                    $scope.data.resultId = '2';
                    return true;
                }

                if ($scope.data.fourth === value.label) {
                    $scope.data.result = 'helping the economy';
                    $scope.data.resultId = '3';
                    return true;
                }
            });
        }


        // If user selected two or more identical values, return false
        function findDuplicate() {

            var modelsArray = [$scope.data.first, $scope.data.second, $scope.data.third, $scope.data.fourth];
            var filteringModelsArray = _.uniq(modelsArray);

            return filteringModelsArray.length === modelsArray.length;
        }

    }


})();
