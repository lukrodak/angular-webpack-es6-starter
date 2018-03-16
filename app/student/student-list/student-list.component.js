import template from './student-list.html';
import controller from './student-list.controller';

const StudentListComponent = {
    restrict: 'E',
    bindings: {
        getStudentsData: '<'
    },
    template,
    controller
};

export default StudentListComponent;