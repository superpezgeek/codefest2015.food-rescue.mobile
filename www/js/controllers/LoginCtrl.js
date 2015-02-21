angular.module('app')
  .controller('LoginCtrl', function ($scope, loginService, userService, $ionicLoading, $log) {
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
          userService.user = response.data.user;
        },
        function (error) {
          $ionicLoading.hide();
          $log.error(error);
        });
    };
  });
