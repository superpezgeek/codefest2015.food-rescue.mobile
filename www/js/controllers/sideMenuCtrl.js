angular
  .module('app')
  .controller('SideMenuCtrl', function($scope, $ionicViewService, userService, $state) {
    $scope.logout = function() {
      $ionicViewService.clearHistory();
      userService.clearUser();
      $state.go('login', {}, {reload: true});
    };
  });