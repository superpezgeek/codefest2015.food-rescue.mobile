angular.module('app')
  .controller('LoginCtrl', function ($scope, loginService, $ionicLoading, userService, $state) {
    $scope.showLoginError = false;

    $scope.user = {
      email: '',
      password: ''
    };

    $scope.login = function (user) {
      $ionicLoading.show({
        template: 'Logging you in...'
      });
      loginService.login(user).then(
        function (value) {
          $ionicLoading.hide();
          $scope.showLoginError = false;

          value.data.user.user_type = value.data.user_type;
          userService.user = value.data.user;

          $scope.user = {};
          $state.go('app.profile.main');
        },
        function () {
          $ionicLoading.hide();
          $scope.showLoginError = true;
          userService.clearUser();
        });
    };
  });
