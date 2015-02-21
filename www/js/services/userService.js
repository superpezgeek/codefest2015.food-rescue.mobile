angular.module('app')
  .service('userService', function ($window) {

    Object.defineProperty(this, 'user', {
      get: function () {
       return $window.localStorage.getItem('foodrescue.user');
      },
      set: function (user) {
        $window.localStorage.setItem('foodrescue.user', user);
      }
    });

  });
