(function () {
    'use strict';

    angular
        .module('app.pages.idealClient')
        .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('idealClient', {
                data: {
                    access: '@'
                },
                abstract: true,
                url: '/idealclient',
                parent: 'default',
                views: {
                    content: {
                        template: '<ui-view />'
                    }
                }
            })
            .state('idealClient.overview', {
                url: '/idealclientoverview',
                resolve: {
                    activeStep: function (stepService, $state) {
                        return stepService.resolveActiveStep(this)
                            .then(function (active) {
                                if (active) {
                                    return active;
                                }

                                return stepService.getLastFinished()
                                    .then(function (finishedStep) {
                                        $state.go(finishedStep.sref);
                                    });
                            })
                    }
                },
                controller: 'IdealClientOverviewController',
                templateUrl: 'pages/idealClient/ideal-client-overview/ideal-client-overview.html'
            })
            .state('idealClient.whoAreYouIdealClient', {
                url: '/clientsurvey',
                resolve: {
                    activeStep: function (stepService, $state) {
                        return stepService.resolveActiveStep(this)
                            .then(function (active) {
                                if (active) {
                                    return active;
                                }

                                return stepService.getLastFinished()
                                    .then(function (finishedStep) {
                                        $state.go(finishedStep.sref);
                                    });
                            })
                    }
                },
                controller: 'WhoAreYouIdealClientController',
                templateUrl: 'pages/idealClient/who-are-you-ideal-client/who-are-you-ideal-client.html'
            })
            .state('idealClient.defineYourIdealClient', {
                url: '/youridealclient',
                resolve: {
                    activeStep: function (stepService, $state) {
                        return stepService.resolveActiveStep(this)
                            .then(function (active) {
                                if (active) {
                                    return active;
                                }

                                return stepService.getLastFinished()
                                    .then(function (finishedStep) {
                                        $state.go(finishedStep.sref);
                                    });
                            })
                    }
                },
                controller: 'DefineYourIdealClientController',
                templateUrl: 'pages/idealClient/define-your-ideal-client/define-your-ideal-client.html'
            })
            .state('idealClient.nameYourIdealClient', {
                url: '/nameyouridealclient',
                resolve: {
                    activeStep: function (stepService, $state) {
                        return stepService.resolveActiveStep(this)
                            .then(function (active) {
                                if (active) {
                                    return active;
                                }

                                return stepService.getLastFinished()
                                    .then(function (finishedStep) {
                                        $state.go(finishedStep.sref);
                                    });
                            })
                    }
                },
                controller: 'NameYourIdealClientController',
                templateUrl: 'pages/idealClient/name-your-ideal-client/name-your-ideal-client.html'
            })
            .state('idealClient.qa', {
                url: '/idealclientq&a',
                resolve: {
                    activeStep: function (stepService, $state) {
                        return stepService.resolveActiveStep(this)
                            .then(function (active) {
                                if (active) {
                                    return active;
                                }

                                return stepService.getLastFinished()
                                    .then(function (finishedStep) {
                                        $state.go(finishedStep.sref);
                                    });
                            })
                    }
                },
                controller: 'IdealClientQAController',
                templateUrl: 'pages/idealClient/ideal-client-qa/ideal-client-qa.html'
            })
            .state('idealClient.commitYourIdealClient', {
                url: '/reviewslapstatement',
                resolve: {
                    activeStep: function (stepService, $state) {
                        return stepService.resolveActiveStep(this)
                            .then(function (active) {
                                if (active) {
                                    return active;
                                }

                                return stepService.getLastFinished()
                                    .then(function (finishedStep) {
                                        $state.go(finishedStep.sref);
                                    });
                            })
                    }
                },
                controller: 'CommitYourIdealClientController',
                templateUrl: 'pages/idealClient/commit-your-ideal-client/commit-your-ideal-client.html'
            })
            .state('idealClient.doubleCheck', {
                url: '/doubleCheck',
                resolve: {
                    activeStep: function (stepService, $state) {
                        return stepService.resolveActiveStep(this)
                            .then(function (active) {
                                if (active) {
                                    return active;
                                }

                                return stepService.getLastFinished()
                                    .then(function (finishedStep) {
                                        $state.go(finishedStep.sref);
                                    });
                            })
                    }
                },
                controller: 'DoubleCheckController',
                templateUrl: 'pages/idealClient/double-check/double-check.html'
            })
            .state('idealClient.slapStatement', {
                url: '/SLAPstatement',
                resolve: {
                    activeStep: function (stepService, $state) {
                        return stepService.resolveActiveStep(this)
                            .then(function (active) {
                                if (active) {
                                    return active;
                                }

                                return stepService.getLastFinished()
                                    .then(function (finishedStep) {
                                        $state.go(finishedStep.sref);
                                    });
                            })
                    }
                },
                controller: 'SlapStatementController',
                templateUrl: 'pages/idealClient/slap-statement/slap-statement.html'
            })
            .state('idealClient.step2Summary', {
                url: '/step2slapsummary',
                resolve: {
                    activeStep: function (stepService, $state) {
                        return stepService.resolveActiveStep(this)
                            .then(function (active) {
                                if (active) {
                                    return active;
                                }

                                return stepService.getLastFinished()
                                    .then(function (finishedStep) {
                                        $state.go(finishedStep.sref);
                                    });
                            })
                    }
                },
                controller: 'Step2SummaryController',
                templateUrl: 'pages/idealClient/step2-summary/step2-summary.html'
            });
    }
}());