angular.module('app')
  .controller('DonorCtrl', function ($scope, $ionicLoading, donorService, $log) {
    var hideLoading = function () {
      $ionicLoading.hide();
    };

    $scope.createDonation = function (donation) {
      $ionicLoading.show({
        template: 'Submitting Donation...'
      });
      donorService.createDonation(donation).then(hideLoading, hideLoading);
    }
  });
