class StudentService {
    constructor($http,$state) {
        'ngInject';
        this._$http = $http;
        this._$state = $state;
    }

    getStudents(){
        return this._$http({
            url: `http://laravel.dev/api/students`,
            method: 'GET'
          }).then((response) => {
              return response.data;
          });
    }

    putStudent(data){
        return this._$http({
            url: `http://laravel.dev/api/students/${data.id}`,
            method: 'PUT',
            data: {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                birthday: data.birthday,
                notes: data.notes
            }
          }).then((response) => {
              this._$state.go('app.student.list');
              return response.data;
          });
    }

    postStudent(data){
        return this._$http({
            url: `http://laravel.dev/api/students`,
            method: 'POST',
            data: {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                birthday: data.birthday,
                notes: data.notes
            }
          }).then((response) => {
              this._$state.go('app.student.list');
              return response.data;
          });
    }

    deleteStudent(studentId){
        return this._$http({
          url: `http://laravel.dev/api/students/${studentId}`,
          method: 'DELETE'
        }).then((response) => {
            this._$state.go('app.student.list');
            return response.data;
        });
    }

    getStudent(studentId) {
        return this._$http({
          url: `http://laravel.dev/api/students/${studentId}`,
          method: 'GET'
        }).then((response) => {
            return response.data;
        });
      }

    getCourses(){
        return this._$http({
            url: `http://laravel.dev/api/courses`,
            method: 'GET'
          }).then((response) => {
              return response.data;
          });
    }
    postStudentCourse(studentId, data){
        return this._$http({
            url: `http://laravel.dev/api/students_courses`,
            method: 'POST',
            data: {
                course_id: data,
                student_id: studentId
            }
          }).then((response) => {
              this._$state.go('app.student.list');
              return response.data;
          });
    }
}

export default StudentService;