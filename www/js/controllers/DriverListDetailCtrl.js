angular
  .module('app')
  .controller('DriverListDetailCtrl', function($scope, $stateParams, $cordovaGeolocation, uiGmapGoogleMapApi) {
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    uiGmapGoogleMapApi.then(function() {
      // http://angular-ui.github.io/angular-google-maps/#!/api
      // http://angular-ui.github.io/angular-google-maps/#!/use

      console.log('maps loaded');
    });

    $scope.id = $stateParams.id;
  });