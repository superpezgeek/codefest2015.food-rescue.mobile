(function () {
    'use strict';

    angular
        .module('app')
        .config(function($stateProvider, $urlRouterProvider) {

            //$stateProvider
            //    .state('app', {
            //        url: "/app",
            //        abstract: true,
            //        templateUrl: "templates/menu.html",
            //        controller: 'AppCtrl'
            //    })
            //    .state('app.search', {
            //        url: "/search",
            //        views: {
            //            'menuContent': {
            //                templateUrl: "templates/search.html"
            //            }
            //        }
            //    });
            //
            //// if none of the above states are matched, use this as the fallback
            //$urlRouterProvider.otherwise('/app/playlists');

        });
})();