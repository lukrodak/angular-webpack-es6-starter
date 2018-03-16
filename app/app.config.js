function AppConfig($stateProvider,
                   $urlRouterProvider,
                   $httpProvider) {
    'ngInject';

    $stateProvider
        .state('app', {
            abstract: true,
            url: '/app',
            component: 'app',
        });

    $urlRouterProvider.otherwise('/app/login');
}

export default AppConfig;
