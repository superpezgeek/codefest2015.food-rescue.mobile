angular.module('app')
  .service('loginService', function ($http) {
    this.login = function (user) {
      return $http.post('https://foodrescue.herokuapp.com/api/v1/users/sign_in', user)
    };
  });
