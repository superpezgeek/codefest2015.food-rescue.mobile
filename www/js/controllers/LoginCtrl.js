angular.module('app')
  .controller('LoginCtrl', function ($scope, loginService, $ionicLoading, userService) {
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
        },
        function () {
          $ionicLoading.hide();
          $scope.showLoginError = true;
          userService.clearUser();
        });
    };
  });
