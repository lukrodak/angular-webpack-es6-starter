import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import CourseComponent from './course.component';
import CourseList from './course-list/course-list.component';
import CourseDetail from './course-detail/course-detail.component';
import CourseService from './course.service';
import CourseAdd from './course-add/course-add.component';
import './course.css';

const CourseModule = angular
    .module('app.course', [
        uiRouter
    ])
    .config(($stateProvider) => {
        'ngInject';
        'ngRoute';

        $stateProvider
            .state('app.course', {
                abstract: true,
                url: '/course',
                component: 'appCourse'
            })
            .state('app.course.list', {
                url: '/list',
                component: 'appCourseList',
                resolve:{
                    coursesData: (Course, $stateParams) => Course.getCourses().then((response) => {
                        return response.data;
                    }, (error) => {
                        console.log(error);
                    })
                }
            })
            .state('app.course.detail', {
                url: '/:id',

                component: 'appCourseDetail',
                resolve:{
                    courseData: (Course, $stateParams) => Course.getCourse($stateParams.id).then((response) => {
                        return response.data;
                    }, (error) => {
                        console.log(error);
                    })
                }
                
            })
            .state('app.course.add',{
                url:'/add',
                component: 'appCourseAdd'
            });
    })
    .component('appCourse', CourseComponent)
    .component('appCourseList', CourseList)
    .component('appCourseDetail', CourseDetail)
    .component('appCourseAdd', CourseAdd)
    .service('Course', CourseService)
    .name;

export default CourseModule;
