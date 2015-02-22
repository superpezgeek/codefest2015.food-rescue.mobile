angular.module('app')
  .service('donorService', function ($http, userService) {
    var buildResourceForDonation = function (donation) {
      return 'https://foodrescue.herokuapp.com/api/v1/donors/' + userService.user.id + '/donations/' + donation.id;
    };

    this.submitDonation = function (donation) {
      if (donation.id) {
        return $http.patch('https://foodrescue.herokuapp.com/api/v1/donors/' + userService.user.id + '/donations/' + donation.id, {donation: donation})
      } else {
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
    }
  });
