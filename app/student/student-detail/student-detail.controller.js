class StudentDetailController {
    constructor(Student, Course, $http, $state) {
        'ngInject';
        this._Student = Student;
        this._Course = Course;
        this._$http = $http;
        this._$state = $state;
        this.formData={};
        this.isSaved=false;
        this.courses={};
        this.selectedName;
    }

    $onInit() {
    }
    
    deleteStudent(){
        this.confirm=true;
        this.isSaved=true;
        this._Student.deleteStudent(this.getStudentData.id);
    }

    submitForm(){
        this.isSaved=true;
        this._Student.putStudent(this.getStudentData);
    }

    sendCourse(){
        this._Student.postStudentCourse(this.getStudentData.id, this.selectedName.id);
    }
  
}

export default StudentDetailController;
