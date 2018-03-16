import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import StudentList from './student-list/student-list.component';

const StudentListModule = angular
    .module('app.student.student-list.studentList',[
        uiRouter,
    ])
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
        .state('app.student.list', {
            url: '/list',
            component: 'appStudentList',
            resolve:{
                getStudentsData: (Student, $stateParams) => Student.getStudents()
            }
        })
    })
    .component('appStudentList', StudentList)
    .name;

export default StudentListModule;