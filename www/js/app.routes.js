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
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');
    });
})();
