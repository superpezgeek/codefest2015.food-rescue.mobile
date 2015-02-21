angular.module('app')
  .controller('ProfileNameCtrl', function($scope, userService, $state) {
    var user = userService.user;

    $scope.firstName = user.first_name;
    $scope.lastName = user.last_name;

    $scope.save = function(firstName, lastName) {
      $state.go('app.profile.main');
    };
  });
