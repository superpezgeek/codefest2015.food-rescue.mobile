(function () {
  'use strict';

  angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url: "/login",
          cache: false,
          templateUrl: "views/login.html",
          controller: "LoginCtrl"
        })
        .state('app', {
          url: '/app',
          abstract: true,
          cache: false,
          templateUrl: 'views/sideMenu.html',
          controller: 'SideMenuCtrl'
        })
        .state('app.overview', {
          url: '/overview',
          cache: false,
          views: {
            'menuContent': {
              templateUrl: 'views/overview.html'
            }
          }
        })
        .state('app.choose-role', {
          url: '/choose',
          cache: false,
          views: {
            'menuContent': {
              templateUrl: 'views/choose-role.html'
            }
          }
        })
        .state('app.donorReg', {
          url: '/donor-reg',
          cache: false,
          abstract: true,
          views: {
            'menuContent': {
              template: '<ion-nav-view name="donorReg"></ion-nav-view>',
              controller: 'DonorRegCtrl'
            }
          }
        })
        .state('app.donorReg.step1', {
          url: '/step-1',
          cache: false,
          views: {
            'donorReg': {
              templateUrl: 'views/donor/donor-reg-1.html'
            }
          }
        })
        .state('app.donorReg.step2', {
          url: '/step-2',
          cache: false,
          views: {
            'donorReg': {
              templateUrl: 'views/donor/donor-reg-2.html'
            }
          }
        })
        .state('app.recipientReg', {
          url: '/recipient-reg',
          abstract: true,
          cache: false,
          views: {
            'menuContent': {
              template: '<ion-nav-view name="recipientReg"></ion-nav-view>',
              controller: 'RecipientRegCtrl'
            }
          }
        })
        .state('app.recipientReg.step1', {
          url: '/step-1',
          cache: false,
          views: {
            'recipientReg': {
              templateUrl: 'views/recipient/recipient-reg-1.html'
            }
          }
        })
        .state('app.recipientReg.step2', {
          url: '/step-2',
          cache: false,
          views: {
            'recipientReg': {
              templateUrl: 'views/recipient/recipient-reg-2.html'
            }
          }
        })
        .state('app.driver', {
          url: '/driver',
          abstract: true,
          cache: false,
          views: {
            'menuContent': {
              template: '<ion-nav-view name="driverContent"></ion-nav-view>'
            }
          }
        })
        .state('app.driver.listing', {
          url: '/listing',
          cache: false,
          views: {
            'driverContent': {
              templateUrl: 'views/driver/listing.html',
              controller: 'DriverListCtrl'
            }
          }
        })
        .state('app.driver.listDetail', {
          url: '/listing/details/:donorId/:donationId',
          cache: false,
          views: {
            'driverContent': {
              templateUrl: 'views/driver/listDetail.html',
              controller: 'DriverListDetailCtrl'
            }
          }
        })
        .state('app.driver.currentDelivery', {
          url: '/current-delivery?donorId&donationId',
          cache: false,
          views: {
            'driverContent': {
              templateUrl: 'views/driver/current-delivery.html',
              controller: 'DriverCurrentDeliveryCtrl'
            }
          }
        })
        .state('app.driverReg', {
          url: '/driver-reg',
          abstract: true,
          cache: false,
          views: {
            'menuContent': {
              template: '<ion-nav-view name="driverReg"></ion-nav-view>',
              controller: 'DriverRegCtrl'
            }
          }
        })
        .state('app.driverReg.step1', {
          url: '/step-1',
          cache: false,
          views: {
            'driverReg': {
              templateUrl: 'views/driver/driverReg1.html'
            }
          }
        })
        .state('app.driverReg.step2', {
          url: '/step-2',
          cache: false,
          views: {
            'driverReg': {
              templateUrl: 'views/driver/driverReg2.html'
            }
          }
        })
        .state('app.driverReg.step3', {
          url: '/step-3',
          cache: false,
          views: {
            'driverReg': {
              templateUrl: 'views/driver/driverReg3.html'
            }
          }
        })
        .state('app.driverReg.step4', {
          url: '/step-4',
          cache: false,
          views: {
            'driverReg': {
              templateUrl: 'views/driver/driverReg4.html'
            }
          }
        })
        .state('app.driverReg.step5', {
          url: '/step-5',
          cache: false,
          views: {
            'driverReg': {
              templateUrl: 'views/driver/driverReg5.html'
            }
          }
        })
        .state('app.profile', {
          url: '/profile',
          cache: false,
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
          cache: false,
          views: {
            'profileContent': {
              templateUrl: 'views/profile/name.html',
              controller: 'ProfileNameCtrl'
            }
          }
        })
        .state('app.profile.contactInfo', {
          url: '/contact-info',
          cache: false,
          views: {
            'profileContent': {
              templateUrl: 'views/profile/contact-info.html',
              controller: 'ProfileContactInfoCtrl'
            }
          }
        })
        .state('app.profile.vehicleInfo', {
          url: '/vehicle-info',
          cache: false,
          views: {
            'profileContent': {
              templateUrl: 'views/profile/vehicle-info.html',
              controller: 'ProfileVehicleInfoCtrl'
            }
          }
        })
        .state('app.donor', {
          url: '/donor',
          cache: false,
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
          cache: false,
          views: {
            'DonorContent': {
              templateUrl: 'views/donor/view-donation.html',
              controller: 'DonationCtrl'
            }
          }
        })
        .state('app.donor.editDonation', {
          url: '/donation/:id',
          cache: false,
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
