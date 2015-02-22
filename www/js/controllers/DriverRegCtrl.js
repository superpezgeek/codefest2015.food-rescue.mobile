angular
  .module('app')
  .controller('DriverRegCtrl', function($scope, $state, userRegService, userService, loginService, driverService, $ionicLoading, $ionicHistory) {
    $scope.user = {};

    $scope.moveToStep = function(step) {
      $state.go('app.driverReg.step' + step);
    };

    $scope.createUser = function() {
      $scope.user.type = 'Driver';

      $ionicLoading.show({
        template: 'Registering...'
      });

      userRegService.create($scope.user).then(function(response) {
        var user = { email: $scope.user.email, password: $scope.user.password };
        loginService.login(user).then(function (value) {
          $ionicLoading.hide();
          userService.user = value.data.user;
          var first_name = $scope.user.first_name;
          var last_name = $scope.user.last_name;
          $scope.user = {};
          $scope.user.first_name = first_name;
          $scope.user.last_name = last_name;
          $state.go('app.driverReg.step2');
        },
        function () {
          $ionicLoading.hide();
          userService.clearUser();
        });
      });
    };

    $scope.updateDriverInfo = function() {
      var newUser = angular.copy(userService.user);

      newUser = angular.extend(newUser, $scope.user);

      $ionicLoading.show({
        template: 'Saving information...'
      });

      driverService.update(newUser).then(function(response) {
        $ionicLoading.hide();

        userService.user = angular.extend(userService.user, response.data, {user_type: 'Driver'});

        $ionicHistory.nextViewOptions({
          disableAnimate: true,
          disableBack: true,
          historyRoot: true
        });
        $state.go('app.profile.main');
      });
    };
  });