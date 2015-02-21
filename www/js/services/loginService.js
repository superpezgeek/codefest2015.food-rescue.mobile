angular.module('app')
  .service('loginService', function ($http) {
    this.login = function (user) {
      var response = $http.post('https://foodrescue.herokuapp.com/api/v1/users/sign_in', user)
        .then(function (response) {
          return response;
        }, function () {
          return false;
        });

      return response;
    };
  });
