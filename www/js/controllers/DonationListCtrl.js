angular.module('app')
  .controller('DonationListCtrl', function ($scope, $ionicLoading, donorService, $state, $interval) {

    $scope.completed = function () {
      return function (item) {
        return item.completed;
      };
    };

    $scope.actionRequired = function () {
      return function (item) {
        return angular.lowercase(item.status) === 'arrived at donor';
      };
    };

    $scope.inProgress = function () {
      return function (item) {
        return [
            'pending',
            'driver in progress',
            'donation received',
            'arrived at recipient'
        ].indexOf(angular.lowercase(item.status)) > 0;
      };
    };

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
    $scope.autoRefresh = $interval(function () {
      $scope.refreshDonations();
    }, 5000);

    $scope.$on('$destroy', function () {
      $interval.cancel($scope.autoRefresh);
    });
  });
