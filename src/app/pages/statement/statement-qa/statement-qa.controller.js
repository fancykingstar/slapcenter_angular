(function() {
    'use strict';

    angular
        .module('app.pages.statement')
        .controller('StatementQAController', StatementQAController);

    /* @ngInject */
    function StatementQAController($scope, pageService) {

        angular.extend($scope, {
            showVideoBlock: false,
            showStaticTextBlock: false
        });

        pageService
            .reset()
            .setShowBC(false)
            .addCrumb({name: 'Dashboard', path: 'home'})
            .setPageTitle('SLAPstatement Q&A');
    }
}());