import template from './course-list.html';
import controller from './course-list.controller';

const CourseListComponent = {
    restrict: 'E',
    bindings: {
        coursesData: '<'
    },
    template,
    controller
};

export default CourseListComponent;