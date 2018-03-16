class CourseAddController {
    constructor(Course, $http, $state) {
        'ngInject';
        this._$http = $http;
        this._Course = Course;
        this._$state = $state;
        this.formData = {};
        this.isSaved=false;
    }

    submitForm(){
        this.isSaved=true;
        this._Course.postCourse(this.formData)
        .then((response) => {
            // this._$state.go('app.course.list');
            this._$state.go('app.course.detail', {id : response.data.id});
            return response.data;
        }, (error) => {
            console.log(error);
        });
    }
}

export default CourseAddController;
