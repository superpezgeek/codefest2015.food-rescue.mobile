angular.module('app')
  .controller('DriverCurrentDeliveryCtrl', function($scope, $stateParams, userService, driverService, donorService, $cordovaBarcodeScanner, $ionicPopup, $state) {
    var user = userService.user;

    if($stateParams.donorId && $stateParams.donationId) {
      driverService
        .getDonation($stateParams.donorId, $stateParams.donationId)
        .success(function(result) {
          $scope.donation = result;
        })
        .error(function(error) {
          console.log(error);
        });
    }
    else {
      driverService
        .getCurrentDonations(user)
        .success(function(result) {
          $scope.donation = result[0];
        })
        .error(function(error) {
          console.log(error);
        });
    }

    $scope.arrivedAtDonor = function() {
      donorService.arrivedAtDonor($scope.donation.donor.id, $scope.donation.id).success(function(){
        $scope.donation.status = 'Arrived at Donor';
      });
    };

    $scope.verifyDriverToDonorHandshake = function() {
      $cordovaBarcodeScanner
        .scan()
        .then(function(barcodeData) {
          if(barcodeData.cancelled){
            return;
          }

          donorService.verifyDriverToDonorHandshake($scope.donation.donor.id, $scope.donation.id, barcodeData.text).success(function(){
            $scope.donation.status = 'Donation Received';
          });
        }, function(error) {
          // An error occurred
        });
    };

    $scope.arrivedAtRecipient = function() {
      donorService.arrivedAtRecipient($scope.donation.donor.id, $scope.donation.id).success(function(){
        $scope.donation.status = 'Arrived at Recipient';
      });
    };

    $scope.verifyDriverToRecipientHandshake = function() {
      $cordovaBarcodeScanner
        .scan()
        .then(function(barcodeData) {
          if(barcodeData.cancelled){
            return;
          }

          donorService.verifyDriverToRecipientHandshake($scope.donation.donor.id, $scope.donation.id, barcodeData.text).success(function(){
            $scope.donation.status = 'Completed';
            var confirmPopup = $ionicPopup.alert({
              title: 'You\'re done!',
              template: 'This delivery is complete!  Thanks!',
              okType: 'button-balanced'
            });
            confirmPopup.then(function(res) {
              if(res) {
                $state.go('app.driver.listing', {reload: true});
              } else {
                // dunno what to do here
              }
            });
          });
        }, function(error) {
          // An error occurred
        });
    };
  });
