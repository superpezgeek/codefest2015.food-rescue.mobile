angular.module('app')
  .service('userService', function ($window) {

    Object.defineProperty(this, 'user', {
      get: function () {
       return angular.fromJson($window.localStorage.getItem('foodrescue.user'));
      },
      set: function (user) {
        if (angular.isObject(user)) {
          $window.localStorage.setItem('foodrescue.user', angular.toJson(user));
        } else {
          throw 'Expecting "user" to be an Object';
        }
      }
    });

    this.clearUser = function () {
      $window.localStorage.removeItem('foodrescue.user');
    };
  });
