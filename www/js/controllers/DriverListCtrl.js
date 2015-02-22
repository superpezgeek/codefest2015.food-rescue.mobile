angular
  .module('app')
  .controller('DriverListCtrl', function($scope, $http, $cordovaGeolocation) {
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    var position = {};

    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (result) {
        position.latitude  = result.coords.latitude;
        position.longitude = result.coords.longitude;
        console.log(position);
      }, function(err) {
        console.log(err);
      });
  });