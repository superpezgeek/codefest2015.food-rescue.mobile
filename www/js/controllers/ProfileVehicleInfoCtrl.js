angular.module('app')
  .controller('ProfileVehicleInfoCtrl', function($scope, userService, $state, driverService) {
    $scope.user = {
      car_make: userService.user.car_make,
      car_model: userService.user.car_model,
      car_year: userService.user.car_year,
      license_plate_number: userService.user.license_plate_number,
      drivers_license_number: userService.user.drivers_license_number
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
