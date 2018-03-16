class CourseListController {
    constructor(Course, $http, $state) {
        'ngInject';
        this._$http = $http;
        this._Course = Course;
        this._$state = $state;
    }

    $onInit() {
    }
   
    getCourse(id){
        this._$state.go('app.course.detail', {id : id});
    }
    add(){
        this._$state.go('app.course.add');
    }
}

export default CourseListController;
