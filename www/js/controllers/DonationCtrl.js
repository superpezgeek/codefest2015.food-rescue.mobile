angular.module('app')
  .controller('DonationCtrl', function ($scope, $ionicLoading, $state, donorService, $stateParams) {
    var hideLoading = function () {
      $ionicLoading.hide();
    };

    if ($stateParams.id) {
      donorService.getDonationWithId($stateParams.id)
        .success(function (value) {
          $scope.donation = value;
        });
    }

    $scope.submitDonation = function (donation) {
      $ionicLoading.show({
        template: 'Submitting...'
      });

      donorService.submitDonation(donation)
        .success(function () {
          $state.go('app.donor.listDonations');
        })
        .error(function (reason) {
          $scope.failure = reason;
        })
        .finally(function () {
          hideLoading();
        });
    };

  });
