import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import LoginComponent from './login.component';

const LoginModule = angular
    .module('app.login', [
        uiRouter
    ])
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app.login', {
                url: '/login',
                component: 'appLogin'
            })
    })
    .component('appLogin', LoginComponent)
    .name;

export default LoginModule;
