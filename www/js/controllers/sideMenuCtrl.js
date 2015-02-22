angular
  .module('app')
  .controller('SideMenuCtrl', function($scope, $ionicHistory, $state, userService, driverService) {
    $scope.user = userService.user;

    $scope.hasDelivery = false;
    if($scope.user !== null && $scope.user !== undefined) {
      driverService
        .hasDelivery($scope.user.id)
        .then(function(result) {
          $scope.hasDelivery = result.data.length > 0;
        });
    }

    $scope.logout = function() {
      userService.clearUser();
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true,
        historyRoot: true
      });
      $state.go('login');
    };
  });
  