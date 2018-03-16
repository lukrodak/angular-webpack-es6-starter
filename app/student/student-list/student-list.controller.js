class StudentListController {
    constructor(Student, $http, $state) {
        'ngInject';
        this._$http = $http;
        this._Student = Student;
        this._$state = $state;
    }

    $onInit() {
    }

    getStudent(id){
        this._$state.go('app.student.detail', {id : id});
    }
    add(){
        this._$state.go('app.student.add');
    }
}

export default StudentListController;
