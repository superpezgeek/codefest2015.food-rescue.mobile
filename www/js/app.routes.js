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
        .state('app.choose-role', {
          url: '/choose',
          views: {
            'menuContent': {
              templateUrl: 'views/choose-role.html'
            }
          }
        })
        .state('app.donorReg', {
          url: '/donor-reg',
          views: {
            'menuContent': {
              templateUrl: 'views/donor/donor-reg.html'
            }
          }
        })
        .state('app.recipientReg', {
          url: '/recipient-reg',
          views: {
            'menuContent': {
              templateUrl: 'views/recipient/recipient-reg.html'
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
        .state('app.driver.listDetail', {
          url: '/listing/details/:id',
          views: {
            'driverContent': {
              templateUrl: 'views/driver/listDetail.html',
              controller: 'DriverListDetailCtrl'
            }
          }
        })
        .state('app.driverReg', {
          url: '/driver-reg',
          abstract: true,
          views: {
            'menuContent': {
              template: '<ion-nav-view name="driverReg"></ion-nav-view>',
              controller: 'DriverRegCtrl'
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
        .state('app.driverReg.step5', {
          url: '/step-5',
          views: {
            'driverReg': {
              templateUrl: 'views/driver/driverReg5.html'
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
          cache: false,
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
        .state('app.profile.contactInfo', {
          url: '/contact-info',
          views: {
            'profileContent': {
              templateUrl: 'views/profile/contact-info.html',
              controller: 'ProfileContactInfoCtrl'
            }
          }
        })
        .state('app.profile.vehicleInfo', {
          url: '/vehicle-info',
          views: {
            'profileContent': {
              templateUrl: 'views/profile/vehicle-info.html',
              controller: 'ProfileVehicleInfoCtrl'
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
