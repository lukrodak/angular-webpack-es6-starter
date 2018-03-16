import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import TestComponent from './test.component';
import TestList from './test-list/test-list.component';
import TestDetail from './test-detail/test-detail.component';
import TestService from './test.service';

const TestModule = angular
    .module('app.test', [
        uiRouter
    ])
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app.test', {
                abstract: true,
                url: '/test',
                component: 'appTest'
            })
            .state('app.test.list', {
                url: '/list',
                component: 'appTestList'
            })
            .state('app.test.detail', {
                url: '/:id',
                component: 'appTestDetail'
            });
    })
    .component('appTest', TestComponent)
    .component('appTestList', TestList)
    .component('appTestDetail', TestDetail)
    .service('Test', TestService)
    .name;

export default TestModule;
