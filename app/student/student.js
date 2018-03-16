import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import StudentComponent from './student.component';
import StudentList from './student-list/student-list.component';
import StudentDetail from './student-detail/student-detail.component';
import StudentService from './student.service';
import CourseService from '../course/course.service';
import StudentAdd from './student-add/student-add.component';
import './student.css';

const StudentModule = angular
    .module('app.student', [
        uiRouter
    ])
    .config(($stateProvider) => {
        'ngInject';
        'ngRoute';
        $stateProvider
            .state('app.student', {
                abstract: true,
                url: '/student',
                component: 'appStudent'
            })
            .state('app.student.list', {
                url: '/list',
                component: 'appStudentList',
                resolve:{
                    getStudentsData: (Student, $stateParams) => Student.getStudents()
                }
            })
            .state('app.student.detail', {
                url: '/:id',                
                component: 'appStudentDetail',
                resolve:{
                    getStudentData: (Student, $stateParams) => Student.getStudent($stateParams.id),
                    getCourseData: (Student, $stateParams) => Student.getCourses()
                }
                
            })
            .state('app.student.add',{
                url:'/add',
                component: 'appStudentAdd'
            });
    })
    .component('appStudent', StudentComponent)
    .component('appStudentList', StudentList)
    .component('appStudentDetail', StudentDetail)
    .component('appStudentAdd', StudentAdd)
    .service('Student', StudentService)
    .service('Course', CourseService)
    .name;

export default StudentModule;
