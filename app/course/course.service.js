class CourseService {
    constructor($http,$state) {
        'ngInject';
        this._$http = $http;
        // this._$state = $state;
    }

    getCourses(){
        return this._$http({
            url: `http://laravel.dev/api/courses`,
            method: 'GET'
          });
    }
    putCourse(data){
        return this._$http({
            url: `http://laravel.dev/api/courses/${data.id}`,
            method: 'PUT',
            data: {
                name: data.name,
                description: data.description
            }
          });
    }
    postCourse(data){
        return this._$http({
            url: `http://laravel.dev/api/courses`,
            method: 'POST',
            data: {
                name: data.name,
                description: data.description
            }
          });
    }
    deleteCourse(courseId){
        return this._$http({
          url: `http://laravel.dev/api/courses/${courseId}`,
          method: 'DELETE'
        });
    }
    getCourse(courseId) {
        return this._$http({
          url: `http://laravel.dev/api/courses/${courseId}`,
          method: 'GET'
        });
      }
}

export default CourseService;