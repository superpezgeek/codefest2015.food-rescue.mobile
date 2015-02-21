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
        .state('about', {
          url: "/about",
          templateUrl: "views/about.html"
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
        .state('app.registration', {
          url: "/registration",
          abstract: true,
          views: {
            'menuContent': {
              template: '<ion-nav-view name="registrationContent"></ion-nav-view>'
            }
          }
        })
        .state('app.registration.donor', {
          url: "/donor",
          abstract: true,
          views: {
            'registrationContent': {
              template: '<ion-nav-view name="registrationDonorContent"></ion-nav-view>'
            }
          }
        })
        .state('app.registration.donor.step1', {
          url: "/step-1",
          views: {
            'registrationDonorContent': {
              templateUrl: "views/registration/donor/step-1.html"
            }
          }
        })
        .state('app.registration.donor.step2', {
          url: "/step-2",
          views: {
            'registrationDonorContent': {
              templateUrl: "views/registration/donor/step-2.html"
            }
          }
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');
    });

})();
