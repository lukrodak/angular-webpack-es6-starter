import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import Test from './test/test';
import Home from './home/home';
import Login from './login/login';
import Course from './course/course';
import Student from './student/student';
import AppConfig from './app.config';
import AppComponent from './app.component';


angular
    .module('app', [
        uiRouter,
        Test,
        Home,
        Login,
        Course,
        Student
    ])
    .config(AppConfig)
    .component('app', AppComponent);