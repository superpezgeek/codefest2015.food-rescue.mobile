angular
  .module('app')
  .controller('DriverListDetailCtrl', function($scope, $stateParams, $cordovaGeolocation, uiGmapGoogleMapApi, $ionicPlatform, driverService) {
    var posOptions = {timeout: 10000, enableHighAccuracy: false},
        myLocation = {
          latitude: null,
          longitude: null
        };

    $scope.map = {
      center: {
        latitude: null,
        longitude: null
      },
      zoom: 12
    };



    driverService
      .getDonation($stateParams.donorId, $stateParams.donationId)
      .success(function(result) {
        $scope.donation = result;
      })
      .error(function(error) {
        console.log(error);
      });

    $scope.getMyLocation = function() {
      return myLocation;
    };

    $ionicPlatform.ready(function() {
      $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (result) {
          console.log(result);
          $scope.map.center.latitude = result.coords.latitude;
          $scope.map.center.longitude = result.coords.longitude;

          myLocation.latitude = result.coords.latitude;
          myLocation.longitude = result.coords.longitude;
        }, function(err) {
          console.log(err);
        });
    });

    uiGmapGoogleMapApi.then(function() {

    });
  });