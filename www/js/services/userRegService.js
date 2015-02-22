angular.module('app')
  .service('userRegService', function ($http) {
    this.create = function (user) {
      return $http.post('https://foodrescue.herokuapp.com/api/v1/users', user)
    };
  });
