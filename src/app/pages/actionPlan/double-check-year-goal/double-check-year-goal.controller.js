(function () {
    'use strict';

    angular
        .module('app.pages.actionPlan')
        .controller('DoubleCheckYearGoalController', DoubleCheckYearGoalController);

    function DoubleCheckYearGoalController($scope, pageService) {

        angular.extend($scope, {
            showVideoBlock: false,
            showStaticTextBlock: false
        });

        pageService
            .reset()
            .setShowBC(false)
            .addCrumb({name: 'Dashboard', path: 'home'})
            .setPageTitle('Action Plan');
    }
}());