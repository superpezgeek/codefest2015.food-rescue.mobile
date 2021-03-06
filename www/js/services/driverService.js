angular.module('app')
  .factory('driverService', function($http) {
    var svc = {
      update: function(user) {
        console.log(user);
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
      getCurrentDonations: function(user) {
        return $http.get('https://foodrescue.herokuapp.com/api/v1/drivers/' + user.id + '/current_donations');
      },
      getDonation: function(donorId, donationId) {
        return $http.get('https://foodrescue.herokuapp.com/api/v1/donors/' + donorId + '/donations/' + donationId);
      },
      accept: function(donorId, donationId) {
        return $http.post('https://foodrescue.herokuapp.com/api/v1/donors/' + donorId + '/donations/' + donationId + '/start_donation');
      },
      hasDelivery: function(userId) {
        return $http.get('https://foodrescue.herokuapp.com/api/v1/drivers/' + userId + '/current_donations');
      }
    };

    return svc;
  });
