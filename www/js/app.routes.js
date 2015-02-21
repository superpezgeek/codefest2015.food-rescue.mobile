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
        //.state('app.donor', {
        //  url: '/app/donor',
        //  abstract: true,
        //  //templateUrl: 'views/sideMenu.html',
        //  controller: 'DonorCtrl'
        //})
        .state('app.donation', {
          url: '/donation',
          views: {
            'menuContent': {
              templateUrl: 'views/donor/create-donation.html'
            }
          }
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');
    });
})();
