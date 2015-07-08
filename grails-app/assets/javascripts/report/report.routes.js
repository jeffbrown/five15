//= wrapped
'use strict';

angular
    .module('five15.report')
    .config(configureRoutes);

function configureRoutes($stateProvider, roles) {
    $stateProvider
        .state('report', {
            url: '/report',
            controller: 'ReportController',
            controllerAs: 'vm',
            templateUrl: '/report/report.htm',
            data: {
                requiredRoles: [roles.USER]
            },
            resolve: ReportController.resolve
        });
}
