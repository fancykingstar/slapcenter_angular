(function () {
    'use strict';

    angular
        .module('app.pages.main')
        .controller('GetHelpController', GetHelpController);

    /* @ngInject */
    function GetHelpController($scope, $auth, $state, toaster, pageService, userService, adminUserService) {

        $scope.options = ['Strategy Question', 'Feeling Stuck', 'Question about SLAPschool', 
        'Question about SLAPworld', 'Need to reschedule my SLAPexpert call', 'Need to reschedule my SLAPmanager call',
        'Question about SLAPcenter', 'Tech Issue/Glitch', 'Other'];
        $scope.optionPrefer = ['Call', 'Email'];
        $scope.sendMessage = function () {
            var sendObject = {
                user_email: userService.user.email,
                kind: $scope.option,
                prefer: $scope.prefer,
                message: $scope.message
            };
            userService.getHelp(sendObject).then(function (res) {
                toaster.pop({ type: 'success', body: "Email Sent successful!" });
            });
        }
    }
})(); 