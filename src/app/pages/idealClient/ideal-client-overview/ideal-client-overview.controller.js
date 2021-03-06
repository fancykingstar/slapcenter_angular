(function() {
    'use strict';

    angular
        .module('app.pages.idealClient')
        .controller('IdealClientOverviewController', IdealClientOverviewController);

    /* @ngInject */
    function IdealClientOverviewController($scope, pageService, activeStep, stepService, $state) {
        $scope.videoUrl = activeStep.videoUrl;
        angular.extend($scope, activeStep.model, {
            forward: true,
            sendData: sendData,
            saved: false
        });

        pageService
            .reset()
            .setShowBC(false)
            .addCrumb({name: 'Dashboard', path: 'home'})
            .setPageTitle('Ideal Client');

        function sendData(direction) {
            stepService.updateActiveModel($scope);
            stepService.setFinishActiveStep();

            var nextprevStep = stepService.getNextAndPrevStep();

            if(direction == 'forward')  
				$state.go(nextprevStep.nextStep.sref); 
            else if(direction == 'backward')
				$state.go(nextprevStep.prevStep.sref);
        }
        
        $scope.$on('$stateChangeStart', function (event, toState, toStateParams) {
            sendData();
        });
    }
}());