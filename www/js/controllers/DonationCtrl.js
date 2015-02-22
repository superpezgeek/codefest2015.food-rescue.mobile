angular.module('app')
  .controller('DonationCtrl', function ($scope, $ionicLoading, $state, donorService, $stateParams, $interval, userService, $ionicPlatform) {

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
      if (donation) {
        if (angular.lowercase(userService.user.user_type) === 'donor') {
          return angular.lowercase(donation.status) === 'arrived at donor';
        }
        if (angular.lowercase(userService.user.user_type) === 'recipient') {
          return angular.lowercase(donation.status) === 'arrived at recipient';
        }
      }
    };

    $scope.currentUserIs = function (user) {
      return userService.user.id === user.id;
    };

    $scope.acknowledgementFor = function (donation) {
      if (angular.lowercase(userService.user.user_type) === 'donor') {
        return donation.driver_to_donor_handshake;
      }
      if (angular.lowercase(userService.user.user_type) === 'recipient') {
        return donation.donor_to_recipient_handshake;
      }
    };

    $ionicPlatform.ready(function () {
      $scope.autoRefresh = $interval(function () {
        $scope.refreshDonation();
      }, 5000);
    });

    $scope.$on('$destroy', function () {
      $interval.cancel($scope.autoRefresh);
    });

    $scope.imageInputHidden = true;

  });
