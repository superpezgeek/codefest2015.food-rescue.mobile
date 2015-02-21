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
        .state('registration', {
          url: "/registration",
          abstract: true,
          templateUrl: "views/registration.html"
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
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');
    });
})();
