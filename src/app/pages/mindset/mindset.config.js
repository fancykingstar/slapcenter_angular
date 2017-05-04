(function () {
    'use strict';

    angular
        .module('app.pages.mindset')
        .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('mindset', {
                data: {
                    access: '@'
                },
                abstract: true,
                url: '/mindset',
                parent: 'default',
                views: {
                    content: {
                        template: '<ui-view />'
                    }
                }
            })
            .state('mindset.ourCommitment', {
                url: '/ourCommitment',
                params: {
                    prev: {
                        sref: null,
                        name: null
                    },
                    next: {
                        sref: 'mindset.yourCommitment',
                        name: 'Your Commitment'
                    }
                },
                controller: 'OurCommitmentController',
                templateUrl: 'pages/mindset/our-commitment/our-commitment.html'
            })
            .state('mindset.yourCommitment', {
                params: {
                    prev: {
                        sref: 'mindset.ourCommitment',
                        name: 'Our Commitment'
                    },
                    next: {
                        sref: 'mindset.slapMindset',
                        name: 'SLAPmindset'
                    }
                },
                url: '/yourCommitment',
                controller: 'YourCommitmentController',
                templateUrl: 'pages/mindset/your-commitment/your-commitment.html'
            })
            .state('mindset.slapMindset', {
                url: '/SLAPmindset',
                params: {
                    prev: {
                        sref: 'mindset.yourCommitment',
                        name: 'Your Commitment'
                    },
                    next: {
                        sref: null,
                        name: null
                    }
                },
                controller: 'SlapMindsetController',
                templateUrl: 'pages/mindset/get-slap-mindset/get-slap-mindset.html'
            });

    }
}());