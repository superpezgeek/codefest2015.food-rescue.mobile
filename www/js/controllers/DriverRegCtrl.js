angular
  .module('app')
  .controller('DriverRegCtrl', function($scope, $state) {
    $scope.user = {};

    $scope.moveToStep = function(step) {
      $state.go('app.driverReg.step' + step);
    };

    $scope.submit = function() {

    };
  });