(function() {
    'use strict';

    angular
        .module('app.pages.yearGoal')
        .controller('TotalFixedExpensesRevenueController', TotalFixedExpensesRevenueController);

    function TotalFixedExpensesRevenueController($scope, pageService) {

        angular.extend($scope, {
            model: {
                first: 'Dropdown Label'
            },
            showContent: false,
            showVideoBlock: false,
            showStaticTextBlock: false
        });

        pageService
            .reset()
            .setShowBC(false)
            .addCrumb({name: 'Dashboard', path: 'home'})
            .setPageTitle('Year Goal');
    }
}());