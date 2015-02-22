angular.module('app')
  .controller('ProfileCtrl', function($scope, userService) {
    $scope.user = userService.user;
  });
