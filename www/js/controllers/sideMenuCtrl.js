angular
  .module('app')
  .controller('SideMenuCtrl', function($scope, $ionicHistory, userService, $state) {
    $scope.user = userService.user;

    $scope.logout = function() {
      $ionicHistory.clearHistory();
      userService.clearUser();
      $state.go('login', {}, {reload: true});
    };
  });