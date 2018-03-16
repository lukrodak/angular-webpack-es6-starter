class StudentAddController {
    constructor(Student, $http, $state) {
        'ngInject';
        this._$http = $http;
        this._Student = Student;
        this.formData={};
        this.isSaved=false;
    }

    $onInit() {
    }
    submitForm(){
        this.isSaved=true;
        this._Student.postStudent(this.formData);
    }
}

export default StudentAddController;
