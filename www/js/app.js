// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if(window.plugins && window.plugins.pushNotification)
    {
      var pushNotification = window.plugins.pushNotification;

      //set push notification callback before we initialize the plugin
      document.addEventListener('push-notification', function(event) {
        //get the notification payload
        var notification = event.notification;

        //display alert to the user for example
        alert(notification.aps.alert);

        //clear the app badge
        pushNotification.setApplicationIconBadgeNumber(0);
      });

      //initialize the plugin
      pushNotification.onDeviceReady({pw_appid:"787CF-7C7BD"});

      //register for pushes
      pushNotification.registerDevice(
        function(status) {
          var deviceToken = status['deviceToken'];
          console.warn('registerDevice: ' + deviceToken);
        },
        function(status) {
          console.warn('failed to register : ' + JSON.stringify(status));
          alert(JSON.stringify(['failed to register ', status]));
        }
      );

      //reset badges on app start
      pushNotification.setApplicationIconBadgeNumber(0);
    }
  });
})
