// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'app.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
   //$ionicConfigProvider.views.maxCache(0);
   $ionicConfigProvider.tabs.position('bottom');
    $stateProvider
    
    .state('home', {
        url: '/home',
        templateUrl: "templates/home.html",
        controller: 'HomeCtrl'
    })  
    .state('entry', {
        url: '/entry',
        templateUrl: "templates/entry.html",
        controller: 'EntryCtrl'
    }) 
    .state('terms', {
        url: '/terms',
        templateUrl: "templates/terms.html",
        controller: 'TermsCtrl'
    })
    .state('prize', {
        url: '/prize',
        templateUrl: "templates/prize.html",
        controller: 'PrizeCtrl'
    })    
    $urlRouterProvider.otherwise('/home');
    
    
})

.constant('SITE_URL', 'http://www.foxmoviespromotion.co.nz/kungfupandacomp/assets/php/enter.php');