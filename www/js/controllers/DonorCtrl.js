angular.module('app', ['ionic'])

  .controller('DonorCtrl', function ($scope) {

    $scope.createDonation = function () {
      alert('created donation');
    }

  });
