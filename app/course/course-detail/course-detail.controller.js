class CourseDetailController {
    constructor(Course, $http, $state) {
        'ngInject';
        this._Course = Course;
        this._$http = $http;
        this._$state = $state;
    }

    $onInit() {
        this.formData={};
        this.isSaved=false;
    }
    
    deleteCourse(){
        this.confirm=true;
        this.isSaved=true;
        this._Course.deleteCourse(this.courseData.id)
        .then((response) => {
            this._$state.go('app.course.list');
            return response.data;
        }, (error) => {
            console.log(error);
        });
    }

    submitForm(){
        this.isSaved=true;;
        this._Course.putCourse(this.courseData)
        .then((response) => {
            // this.courseData=response.data;
            // this._$state.reload();
            // this._$state.$apply();
            this.isSaved=false;
            return response.data;
        }, (error) => {
            console.log(error);
        });
    }
  
}

export default CourseDetailController;
