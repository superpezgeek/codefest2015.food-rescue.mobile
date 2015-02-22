angular.module('app')
  .controller('DonationCtrl', function ($scope, $ionicLoading, $state, donorService, $stateParams, $interval) {

    $scope.refreshDonation = function () {
      if ($stateParams.id) {
        donorService.getDonationWithId($stateParams.id)
          .success(function (value) {
            $scope.donation = value;
          })
          .finally(function () {
            $scope.$broadcast('scroll.refreshComplete');
          });
      }
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
          $ionicLoading.hide();
        });
    };

    $scope.requiresAcknowledgement = function (donation) {
      return angular.lowercase(donation.status) === 'arrived at donor';
    };

    $scope.autoRefresh = $interval(function () {
      $scope.refreshDonation();
    }, 5000);

    $scope.$on('$destroy', function () {
      $interval.cancel($scope.autoRefresh);
    });

  });
