import template from './student-detail.html';
import controller from './student-detail.controller';

const StudentDetailComponent = {
    restrict: 'E',
    bindings: {
        getStudentData: '<'
        ,getCourseData: '<'
    },
    template,
    controller
};

export default StudentDetailComponent;