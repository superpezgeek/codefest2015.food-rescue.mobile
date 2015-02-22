angular
  .module('app')
  .controller('DriverListDetailCtrl', function($scope, $stateParams, $cordovaGeolocation, uiGmapGoogleMapApi) {
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $scope.map = {
      center: {
        latitude: null,
        longitude: null
      },
      zoom: 12
    };

    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (result) {
        $scope.map.center.latitude  = result.coords.latitude;
        $scope.map.center.longitude = result.coords.longitude;
      }, function(err) {
        console.log(err);
      });

    uiGmapGoogleMapApi.then(function() {
      // http://angular-ui.github.io/angular-google-maps/#!/api
      // http://angular-ui.github.io/angular-google-maps/#!/use

      console.log('maps loaded');
    });

    $scope.id = $stateParams.id;
  });