import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import HomeComponent from './home.component';

const HomeModule = angular
    .module('app.home', [
        uiRouter
    ])
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app.home', {
                url: '/home',
                component: 'appHome'
            })
    })
    .component('appHome', HomeComponent)
    .name;

export default HomeModule;
