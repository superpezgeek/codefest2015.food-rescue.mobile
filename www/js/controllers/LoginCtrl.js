angular.module('app')
  .controller('LoginCtrl', function ($scope, loginService, $ionicLoading, userService, $state, $window) {
    $scope.showLoginError = false;

    $scope.user = {
      email: '',
      password: ''
    };

    $scope.login = function (user) {
      $ionicLoading.show({
        template: 'Logging you in...'
      });

      // TODO: Do this better!
      var deviceToken = $window.localStorage.getItem('foodrescue.deviceToken');
      user.device_id = deviceToken;

      loginService.login(user).then(
        function (value) {
          $ionicLoading.hide();
          $scope.showLoginError = false;

          value.data.user.user_type = value.data.user_type;
          userService.user = value.data.user;

          $scope.user = {};

          if(userService.user.user_type === 'Driver') {
            $state.go('app.driver.listing');
          }
          else if(userService.user.user_type === 'Donor' || userService.user.user_type === 'Recipient') {
            $state.go('app.donor.listDonations');
          }
          else {
            $state.go('app.profile.main');
          }
        },
        function () {
          $ionicLoading.hide();
          $scope.showLoginError = true;
          userService.clearUser();
        });
    };
  });
