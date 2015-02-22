angular
  .module('app')
  .controller('DriverListDetailCtrl', function($scope, $stateParams, $cordovaGeolocation, uiGmapGoogleMapApi, $ionicPlatform, driverService, $ionicPopup, $state) {
    var posOptions = {timeout: 10000, enableHighAccuracy: false},
        myLocation = {
          latitude: null,
          longitude: null
        },
        donorLocation = {
          latitude: null,
          longitude: null
        },
        recipientLocation = {
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

        donorLocation.latitude = result.donor.lat;
        donorLocation.longitude = result.donor.lng;

        recipientLocation.latitude = result.recipient.lat;
        recipientLocation.longitude = result.recipient.lng;
      })
      .error(function(error) {
        console.log(error);
      });

    $scope.getMyLocation = function() {
      return myLocation;
    };

    $scope.getDonorLocation = function() {
      return donorLocation;
    };

    $scope.getRecipientLocation = function() {
      return recipientLocation;
    };

    $scope.accept = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Confirm',
        template: 'Are you sure you want to accept this delivery?',
        okType: 'button-balanced',
        cancelText: 'No',
        okText: 'Yes'
      });
      confirmPopup.then(function(res) {
        if(res) {
          driverService.accept($scope.donation.donor.id, $scope.donation.id);
          $state.go('app.driver.currentDelivery', {donorId: $scope.donation.donor.id, donationId: $scope.donation.id}, {reload: true});
        } else {
          // dunno what to do here
        }
      });
    };

    $ionicPlatform.ready(function() {
      $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (result) {
          $scope.map.center.latitude = result.coords.latitude;
          $scope.map.center.longitude = result.coords.longitude;

          myLocation.latitude = result.coords.latitude;
          myLocation.longitude = result.coords.longitude;
        }, function(err) {
          console.log(err);
        });
    });
  });