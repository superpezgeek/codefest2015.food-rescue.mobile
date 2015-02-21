angular.module('app')
  .factory('tokenAppendingInterceptor', function (userService, $window) {
    return {
      request: function ($config) {
        if (userService.user) {
          var user = userService.user;
          $config.headers['Authorization'] = 'Basic ' + $window.btoa(user.email + ":" + user.authentication_token);
        }
        return $config;
      }
    };
  });
