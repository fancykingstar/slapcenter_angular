(function() {
    'use strict';

    angular
        .module('app.pages.yearGoal')
        .controller('Step2SummaryController', Step2SummaryController);

    function Step2SummaryController($scope, pageService) {

        angular.extend($scope, {
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