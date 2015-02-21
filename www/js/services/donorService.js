angular.module('app')
  .service('donorService', function ($http, userService) {
    this.createDonation = function (donation) {
      return $http.post("https://foodrescue.herokuapp.com/api/v1/donors/" + userService.user.id + "/donations", {donation: donation});
    };
  });
