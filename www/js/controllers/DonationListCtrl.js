angular.module('app')
  .controller('DonationListCtrl', function ($scope, $ionicLoading, donorService, $state) {

    $scope.refreshDonations = function () {
      donorService.getDonationsForCurrentUser()
        .success(function (value) {
          $scope.donations = value;
        })
        .finally(function () {
          $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.delete = function (donation) {
      donorService.deleteDonation(donation).success($scope.refreshDonations);
    };

    $scope.edit = function (donation) {
      $state.go('app.donor.editDonation', {id: donation.id});
    };

    $scope.view = function (donation) {
      $state.go('app.donor.viewDonation', {id: donation.id});
    };

    $scope.createDonation = function () {
      $state.go('app.donor.createDonation');
    };

    $scope.refreshDonations();
  });
