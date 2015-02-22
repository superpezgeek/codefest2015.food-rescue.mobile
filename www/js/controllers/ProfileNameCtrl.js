angular.module('app')
  .controller('ProfileNameCtrl', function($scope, userService, $state, driverService) {
    $scope.user = {
      firstName: userService.user.first_name,
      lastName: userService.user.last_name
    };

    $scope.save = function(user) {
      var newUser = angular.copy(userService.user);
      newUser.first_name = user.firstName;
      newUser.last_name = user.lastName;

      driverService.update(newUser).then(function(response) {
        userService.user = response.data;
        $state.go('app.profile.main', null, {location: 'replace'});
      });
    };
  });
