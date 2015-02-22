angular.module('app')
  .service('donorService', function ($http, userService) {
    var buildResourceForDonation = function (donation) {
      return 'https://foodrescue.herokuapp.com/api/v1/donors/' + userService.user.id + '/donations/' + donation.id;
    };

    this.submitDonation = function (donation) {
      if (donation.id) {
        return $http.patch('https://foodrescue.herokuapp.com/api/v1/donors/' + userService.user.id + '/donations/' + donation.id, {donation: donation})
      } else {
        donation.image = 'http://lorempixel.com/100/100/food/?_' + Math.random();
        return $http.post('https://foodrescue.herokuapp.com/api/v1/donors/' + userService.user.id + '/donations', {donation: donation});
      }
    };

    this.getDonationsForCurrentUser = function () {
      return $http.get('https://foodrescue.herokuapp.com/api/v1/donors/' + userService.user.id + '/donations');
    };

    this.getDonationWithId = function (id) {
      return $http.get(buildResourceForDonation({id: id}));
    };

    this.deleteDonation = function (donation) {
      return $http.delete(buildResourceForDonation(donation));
    };

    this.arrivedAtDonor = function(donorId, donationId) {
      var route = 'https://foodrescue.herokuapp.com/api/v1/donors/' + donorId + '/donations/' + donationId + '/arrived_at_donor';
      return $http.post(route);
    };

    this.verifyDriverToDonorHandshake = function(donorId, donationId, handshakeValue) {
      var route = 'https://foodrescue.herokuapp.com/api/v1/donors/' + donorId + '/donations/' + donationId + '/verify_driver_to_donor_handshake';
      return $http.post(route, {hash: handshakeValue});
    };

    this.arrivedAtRecipient = function(donorId, donationId) {
      var route = 'https://foodrescue.herokuapp.com/api/v1/donors/' + donorId + '/donations/' + donationId + '/arrived_at_recipient';
      return $http.post(route);
    };

    this.verifyDriverToRecipientHandshake = function(donorId, donationId, handshakeValue) {
      var route = 'https://foodrescue.herokuapp.com/api/v1/donors/' + donorId + '/donations/' + donationId + '/verify_driver_to_recipient_handshake';
      return $http.post(route, {hash: handshakeValue});
    };
  });
