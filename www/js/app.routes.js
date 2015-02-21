(function () {
  'use strict';

  angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url: "/login",
          templateUrl: "views/login.html",
          controller: "LoginCtrl"
        })
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'views/sideMenu.html',
          controller: 'SideMenuCtrl'
        })
        .state('app.overview', {
          url: '/overview',
          views: {
            'menuContent': {
              templateUrl: 'views/overview.html'
            }
          }
        })
        .state('app.driverReg', {
          url: '/driver-reg',
          abstract: true,
          views: {
            'menuContent': {
                template: '<ion-nav-view name="driverReg"></ion-nav-view>'
            }
          }
        })
        .state('app.driverReg.step1', {
          url: '/step-1',
          views: {
            'driverReg': {
              templateUrl: 'views/driverReg1.html'
            }
          }
        })        
        .state('app.driverReg.step2', {
          url: '/step-2',
          views: {
            'driverReg': {
              templateUrl: 'views/driverReg2.html'
            }
          }
        })
        .state('app.donation', {
          url: '/donation',
          views: {
            'menuContent': {
              templateUrl: 'views/donor/create-donation.html',
              controller: 'DonorCtrl'
            }
          }
        })
        .state('app.profile', {
          url: '/profile',
          abstract: true,
          views: {
            'menuContent': {
              template: '<ion-nav-view name="profileContent"></ion-nav-view>'
            }
          }
        })
        .state('app.profile.main', {
          url: '/main',
          views: {
            'profileContent': {
              templateUrl: 'views/profile.html',
              controller: 'ProfileCtrl'
            }
          }
        })
        .state('app.profile.name', {
          url: '/name',
          views: {
            'profileContent': {
              templateUrl: 'views/profile/name.html',
              controller: 'ProfileNameCtrl'
            }
          }
        })
        .state('logout', {
          url: '/logout',
          controller: function($state, userService) {
            userService.clearUser();
            $state.go('login');
          }
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');
    });
})();
