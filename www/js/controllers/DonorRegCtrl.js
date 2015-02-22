angular
  .module('app')
  .controller('DonorRegCtrl', function($scope, $state, userRegService, userService, loginService, driverService, $ionicLoading, $ionicHistory, $window) {
    $scope.user = {};

    $scope.createUser = function() {
      $scope.user.type = 'Donor';

      $ionicLoading.show({
        template: 'Registering...'
      });

      userRegService.create($scope.user).then(function(response) {
        var user = { email: $scope.user.email, password: $scope.user.password };

        // TODO: Do this better!
        var deviceToken = $window.localStorage.getItem('foodrescue.deviceToken');
        user.device_id = deviceToken;

        loginService.login(user).then(function (value) {
          $ionicLoading.hide();
          userService.user = value.data.user;

          var first_name = $scope.user.first_name;
          var last_name = $scope.user.last_name;
          $scope.user = {};
          $scope.user.first_name = first_name;
          $scope.user.last_name = last_name;

          $state.go('app.donorReg.step2');
        },
        function () {
          $ionicLoading.hide();
          userService.clearUser();
        });
      });
    };

    $scope.updateDonorInfo = function() {
      var newUser = angular.copy(userService.user);

      newUser = angular.extend(newUser, $scope.user);

      $ionicLoading.show({
        template: 'Saving information...'
      });

      driverService.update(newUser).then(function(response) {
        $ionicLoading.hide();

        var ridic = angular.copy(response.data);
        ridic.user_type = 'Donor';
        userService.user = ridic;

        $ionicHistory.nextViewOptions({
          disableAnimate: true,
          disableBack: true,
          historyRoot: true
        });
        $state.go('app.profile.main');
      });
    };
  });