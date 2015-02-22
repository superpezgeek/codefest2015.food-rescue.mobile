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
        //.state('app.driverReg.step2', {
        //  url: '/step-2',
        //  views: {
        //    'driverReg': {
        //      templateUrl: 'views/driverReg2.html'
        //    }
        //  }
        //})
        .state('app.donor', {
          url: '/donor',
          abstract: true,
          views: {
            'menuContent': {
              template: '<ion-nav-view name="DonorContent"></ion-nav-view>'
            }
          }
        })
        .state('app.donor.createDonation', {
          url: '/donate',
          cache: false,
          views: {
            'DonorContent': {
              templateUrl: 'views/donor/create-donation.html',
              controller: 'DonationCtrl'
            }
          }
        })
        .state('app.donor.viewDonation', {
          url: '/donation/:id',
          views: {
            'DonorContent': {
              templateUrl: 'views/donor/view-donation.html',
              controller: 'DonationCtrl'
            }
          }
        })
        .state('app.donor.editDonation', {
          url: '/donation/:id',
          views: {
            'DonorContent': {
              templateUrl: 'views/donor/edit-donation.html',
              controller: 'DonationCtrl'
            }
          }
        })
        .state('app.donor.listDonations', {
          url: '/donations',
          cache: false,
          views: {
            'DonorContent': {
              templateUrl: 'views/donor/list-donations.html',
              controller: 'DonationListCtrl'
            }
          }
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');
    });
})();
