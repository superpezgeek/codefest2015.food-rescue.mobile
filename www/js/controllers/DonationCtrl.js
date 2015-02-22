angular.module('app')
  .controller('DonationCtrl', function ($scope, $ionicLoading, $state, donorService, $stateParams, uiGmapGoogleMapApi) {
    var hideLoading = function () {
      $ionicLoading.hide();
    };

    $scope.recipientLocation = function () {
      var location = {};
      if ($scope.donation) {
        location.latitude = $scope.donation.recipient.lat;
        location.longitude = $scope.donation.recipient.lng;
      }
      return location;
    };

    $scope.refreshDonation = function () {
      donorService.getDonationWithId($stateParams.id)
        .success(function (value) {
          $scope.donation = value;
        })
        .finally(function () {
          $scope.$broadcast('scroll.refreshComplete');
        });
    };

    if ($stateParams.id) {
      $scope.refreshDonation();
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

    uiGmapGoogleMapApi.then(function() {

    });

  });
