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
          userService.user = value.data.user;
          $state.go('app.profile.main');
        },
        function () {
          $ionicLoading.hide();
          $scope.showLoginError = true;
          userService.clearUser();
        });
    };
  });
