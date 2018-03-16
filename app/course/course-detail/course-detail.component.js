import template from './course-detail.html';
import controller from './course-detail.controller';

const CourseDetailComponent = {
    restrict: 'E',
    bindings: {
        courseData: '<'
    },
    template,
    controller
};

export default CourseDetailComponent;