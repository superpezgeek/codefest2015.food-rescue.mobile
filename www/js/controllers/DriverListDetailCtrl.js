angular
  .module('app')
  .controller('DriverListDetailCtrl', function($scope, $stateParams, $cordovaGeolocation, uiGmapGoogleMapApi, $ionicPlatform) {
    var posOptions = {timeout: 10000, enableHighAccuracy: false};

    $scope.id = $stateParams.id;

    $ionicPlatform.ready(function() {
      $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (result) {
          console.log(result);
          $scope.map = {
            center: {
              latitude: result.coords.latitude,
              longitude: result.coords.longitude
            },
            zoom: 12
          };
        }, function(err) {
          console.log(err);
        });
    });

    uiGmapGoogleMapApi.then(function() {

    });
  });