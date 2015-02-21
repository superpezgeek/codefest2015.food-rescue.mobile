angular
  .module('app')
  .controller('DriverListCtrl', function($scope, uiGmapGoogleMapApi) {
    uiGmapGoogleMapApi.then(function() {
      // http://angular-ui.github.io/angular-google-maps/#!/api
      // http://angular-ui.github.io/angular-google-maps/#!/use

      console.log('maps loaded');
    });
  });