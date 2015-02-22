angular.module('app')
  .controller('ProfileContactInfoCtrl', function($scope, userService, $state, driverService) {
    $scope.user = {
      phone_number: userService.user.phone_number,
      address_1: userService.user.address_1,
      address_2: userService.user.address_2,
      city: userService.user.city,
      state: userService.user.state,
      zipcode: userService.user.zipcode
    };

    $scope.save = function(user) {
      var newUser = angular.copy(userService.user);

      newUser = angular.extend(newUser, user);

      driverService.update(newUser).then(function(response) {
        userService.user = response.data;
        $state.go('app.profile.main', null, {location: 'replace'});
      });
    };
  });
