(function() {
  'use strict';

  angular
    .module('app', ['ionic', 'ngCordova', 'uiGmapgoogle-maps', 'monospaced.qrcode'])
    .run(function($ionicPlatform, $cordovaSplashscreen, $timeout, userService, $state, $location, $window) {
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
          if(ionic.Platform.isIOS()) {
            iosPushNotifications($window.localStorage);
          }
          else if(ionic.Platform.isAndroid()) {
            androidPushNotifictions($window.localStorage);
          }
          else {
            console.error("PUSH NOTIFICATIONS NOT WORKING");
          }
        }

        if(window.navigator && window.navigator.splashscreen) {
          if(userService.user && userService.user.user_type) {
            var state = '';
            switch(userService.user.user_type) {
              case 'Driver':
                state = 'app.driver.listing';
                break;
              case 'Donor':
              case 'Recipient':
                state = 'app.donor.listDonations';
                break;
              default:
                state = 'login';
                break;
            }

            var href = $state.href(state);
            $location.url(href.replace('#', ''));
          }

          $timeout(function() {
            $cordovaSplashscreen.hide();
          }, 2000);
        }
      });
    })
    .config(function($httpProvider, uiGmapGoogleMapApiProvider) {
      $httpProvider.interceptors.push('tokenAppendingInterceptor');
      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBmqSE_OZ435kcKruJi6k8ffRlDV2OLlss',
        v: '3.17',
        libraries: 'geometry,visualization'
      });
    });


  function iosPushNotifications(localStorage) {
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

        localStorage.setItem('foodrescue.deviceToken', deviceToken);
      },
      function(status) {
        console.warn('failed to register : ' + JSON.stringify(status));
      }
    );

    //reset badges on app start
    pushNotification.setApplicationIconBadgeNumber(0);
  }

  function androidPushNotifictions(localStorage) {
    var pushNotification = window.plugins.pushNotification;

    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
      var title = event.notification.title;
      var userData = event.notification.userdata;

      if(typeof(userData) != "undefined") {
        console.warn('user data: ' + JSON.stringify(userData));
      }

      alert(title);
    });

    //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_NUMBER", pw_appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    pushNotification.onDeviceReady({ projectid: "1040147572965", pw_appid : "787CF-7C7BD" });

    //register for pushes
    pushNotification.registerDevice(
      function(status) {
        var pushToken = status;
        console.warn('push token: ' + pushToken);

        localStorage.setItem('foodrescue.deviceToken', deviceToken);
      },
      function(status) {
        console.warn(JSON.stringify(['failed to register ', status]));
      }
    );
  }
}
)();
