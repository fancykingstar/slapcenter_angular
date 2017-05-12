(function () {
    'use strict';

    angular
        .module('app.pages.mindset')
        .controller('SlapStartDateController', SlapStartDateController);

    /* @ngInject */
    function SlapStartDateController($scope, pageService) {

        $scope.visible = true;

        var date = new Date();
        var currentMonth = date.getMonth().toString();
        var currentYear = date.getFullYear();

        angular.extend($scope, {
            model: {
                year: currentYear,
                month: currentMonth
            },
            showVideoBlock: false,
            showStaticTextBlock: false,
            showStartDate: false,
            forward: true
        });

        $scope.sendData = sendData;


        $scope.$watch('model.month', function (value) {
            if (value !== undefined) {
                if (+value < +currentMonth) {
                    $scope.model.year += 1;
                } else {
                    $scope.model.year = currentYear;
                }
            }
        });

        pageService
            .reset()
            .setShowBC(false)
            .addCrumb({name: 'Dashboard', path: 'home'})
            .setPageTitle('Your SLAP Start Date');

        function sendData() {
            var urls = $state.current.name.split('.');

            return stepService.sendApiData(urls[urls.length - 1], $scope.model)
                .then(function (response) {
                    console.log(response);
                });
        }
    }

}());