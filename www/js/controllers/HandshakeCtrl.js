angular.module('app')
  .controller('HandshakeCtrl', function($scope, $cordovaBarcodeScanner) {
    $scope.makeQrcode = function(data) {
      $scope.qrdata = data;
    };

    $scope.scan = function(){
      $cordovaBarcodeScanner
        .scan()
        .then(function(barcodeData) {
          $scope.success = barcodeData;
        }, function(error) {
          // An error occurred
        });
    };
  });
