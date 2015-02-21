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
        function (response) {
          $ionicLoading.hide();

          if (response) {
            $scope.showLoginError = false;
            userService.user = response.data.user;
          }
          else {
            $scope.showLoginError = true;
          }
        },
        function () {
          $ionicLoading.hide();
          $scope.showLoginError = true;
        });
    };
  });
