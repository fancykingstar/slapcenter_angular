(function () {
    'use strict';

    angular
        .module('app.services')
        .service('asideService', asideService);

    /* @ngInject */
    function asideService() {
        var slapStatement = [
            {
                name: 'SLAPstatement Overview',
                sref: 'statement.overview'
            }, {
                name: 'SLAPstatement Q&A',
                sref: 'statement.qa'
            }
        ];

        var slapMindset = [
            {
                name: 'Our Commitment To You',
                sref: 'mindset.ourCommitment'
            },{
                name: 'Your Commitment to Us',
                sref: 'mindset.yourCommitment'
            },{
                name: 'Get the SLAPmindset',
                sref: 'mindset.slapMindset'
            },{
                name: 'Privilege and Responsibility',
                sref: 'mindset.privilegeAndResponsibility'
            },{
                name: 'Are You Stuck?',
                sref: 'mindset.areYourStuck'
            },{
                name: 'Cashflow / Capacity Cath 22',
                sref: 'mindset.cashFlow'
            },{
                name: 'Your Business With / Without A SLAP',
                sref: 'mindset.yourBusiness'
            },{
                name: 'Top Down, Bottom Up',
                sref: 'mindset.topDownBottomUp'
            },{
                name: 'Start SLAP\'n!',
                sref: 'mindset.startSlapn'
            },{
                name: 'Your SLAP Start Date',
                sref: 'mindset.slapStartDate'
            }
        ];

        var yearGoals = [
            {
                name: '1 Year Goal Overview',
                sref: 'yearGoal.overview'
            }, {
                name: '1 Year Goal Q&A',
                sref: 'yearGoal.qa'
            }
        ];

        var idealClients = [
            {
                name: 'Ideal Client Overview',
                sref: 'idealClient.overview'
            }, {
                name: 'Ideal Client Q&A',
                sref: 'idealClient.qa'
            }
        ];

        var actionPlans =[
            {
                name: 'Action Plan Overview',
                sref: 'actionPlan.overview'
            }, {
                name: 'Action Plan Q&A',
                sref: 'actionPlan.qa'
            }
        ];

        var execute = [];

        this.getAll = getAll;

        ////////////////////////
        function getAll() {
            return {
                slapStatement : slapStatement,
                slapMindset : slapMindset,
                yearGoals : yearGoals,
                idealClients : idealClients,
                actionPlans : actionPlans,
                execute: execute
            };
        }
    }
}());