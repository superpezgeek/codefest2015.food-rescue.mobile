angular.module('app')
  .controller('LoginCtrl', function($scope, loginService, $ionicLoading) {
    $scope.user = {
      email: '',
      password: ''
    };

    $scope.login = function(user) {
      $ionicLoading.show({
        template: 'Logging you in...'
      });
      loginService.login(user).then(
        function(response) {
          $ionicLoading.hide();
          console.log(response);
        },
        function(error) {
          $ionicLoading.hide();
          console.log(error);
        });
    };
  });
