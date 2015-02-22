angular.module('app')
  .factory('driverService', function($http) {
    var svc = {
      update: function(user) {
        return $http.patch('https://foodrescue.herokuapp.com/api/v1/drivers/' + user.id, {driver: user}).then(
          function(response) {
            return response;
          },
          function(error) {
            return error;
          }
        )
      }
    };

    return svc;
  });
