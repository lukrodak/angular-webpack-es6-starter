import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import CourseList from './course-list/course-list.component';

const CourseListModule = angular
    .module('app.course.course-list.courseList',[
        uiRouter,
    ])
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
        .state('app.course.list', {
            url: '/list',
            component: 'appCourseList',
            resolve:{
                coursesData: (Course, $stateParams) => Course.getCourses().then((response) => {
                    return response.data;
                })
            }
        })
    })
    .component('appCourseList', CourseList)
    .name;

export default CourseListModule;