angular
  .module('app')
  .controller('RecipientRegCtrl', function($scope, $state, userRegService, userService, loginService, driverService, $ionicLoading, $window, $ionicHistory) {
    $scope.user = {};

    $scope.createUser = function() {
      $scope.user.type = 'Recipient';

      $ionicLoading.show({
        template: 'Registering...'
      });

      // TODO: Do this better!
      var deviceToken = $window.localStorage.getItem('foodrescue.deviceToken');
      $scope.user.device_id = deviceToken;

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
          $state.go('app.recipientReg.step2');
        },
        function () {
          $ionicLoading.hide();
          userService.clearUser();
        });
      });
    };

    $scope.updateRecipientInfo = function() {
      var newUser = angular.copy(userService.user);

      newUser = angular.extend(newUser, $scope.user);

      $ionicLoading.show({
        template: 'Saving information...'
      });

      driverService.update(newUser).then(function(response) {
        $ionicLoading.hide();
        response.data.user_type = 'Recipient';
        userService.user = response.data;

        $ionicHistory.nextViewOptions({
          disableAnimate: true,
          disableBack: true,
          historyRoot: true
        });
        $state.go('app.profile.main', null, {location: 'replace'});
      });
    };
  });