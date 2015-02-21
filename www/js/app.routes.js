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
        .state('app.driver', {
          url: '/driver',
          abstract: true,
          views: {
            'menuContent': {
                template: '<ion-nav-view name="driverContent"></ion-nav-view>'
            }
          }
        })
        .state('app.driver.listing', {
          url: '/listing',
          views: {
            'driverContent': {
              templateUrl: 'views/driver/listing.html',
              controller: 'DriverListCtrl'
            }
          }
        })
        .state('app.driverReg', {
          url: '/driver-reg',
          controller: 'DriverRegCtrl',
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
              templateUrl: 'views/driver/driverReg1.html'
            }
          }
        })        
        .state('app.driverReg.step2', {
          url: '/step-2',
          views: {
            'driverReg': {
              templateUrl: 'views/driver/driverReg2.html'
            }
          }
        })
        .state('app.driverReg.step3', {
          url: '/step-3',
          views: {
            'driverReg': {
              templateUrl: 'views/driver/driverReg3.html'
            }
          }
        })
        .state('app.driverReg.step4', {
          url: '/step-4',
          views: {
            'driverReg': {
              templateUrl: 'views/driver/driverReg4.html'
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
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');
    });
})();
