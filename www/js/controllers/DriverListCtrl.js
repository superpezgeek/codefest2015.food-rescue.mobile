angular
  .module('app')
  .controller('DriverListCtrl', function($scope, $http, $cordovaGeolocation, driverService) {
    $scope.donations = [];

    driverService
      .get()
      .success(function(result) {
        $scope.donations = result.possible_donations;
        console.log(result);
      })
      .error(function(error) {
        console.log(error);
      });
  });