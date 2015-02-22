angular.module('app')
  .service('recipientService', function ($http) {
    this.update = function (user) {
      return $http.patch('https://foodrescue.herokuapp.com/api/v1/recipient/' + user.id, {recipient: user});
    };
  });
