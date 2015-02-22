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
      },
      get: function() {
        return $http.get('https://foodrescue.herokuapp.com/api/v1/drivers/');
      },
      getDonation: function(donorId, donationId) {
        return $http.get('https://foodrescue.herokuapp.com/api/v1/donors/' + donorId + '/donations/' + donationId);
      },
      accept: function(donorId, donationId) {
        return $http.post('https://foodrescue.herokuapp.com/api/v1/donors/' + donorId + '/donations/' + donationId + '/start_donation');
      }
    };

    return svc;
  });
