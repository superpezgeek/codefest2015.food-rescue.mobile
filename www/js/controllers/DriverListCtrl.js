angular
  .module('app')
  .controller('DriverListCtrl', function($scope, $http, $cordovaGeolocation, driverService) {
    $scope.donations = [];

    driverService
      .get()
      .success(function(result) {
        $scope.donations = result.possible_donations;
      })
      .error(function(error) {
        console.log(error);
      });

    $scope.refresh = function() {
      driverService
        .get()
        .success(function(result) {
          $scope.donations = result.possible_donations;
        })
        .error(function(error) {
          console.log(error);
        })
        .finally(function() {
          $scope.$broadcast('scroll.refreshComplete');
        });
    };
  });