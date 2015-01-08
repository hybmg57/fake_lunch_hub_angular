// app/scripts/app.js

'use strict';

/**
 * @ngdoc overview
 * @name fakeLunchHubApp
 * @description
 * # fakeLunchHubApp
 *
 * Main module of the application.
 */
var app = angular.module('fakeLunchHubApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ng-token-auth'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/groups', {
      templateUrl: 'views/groups.html',
      controller: 'GroupsCtrl'
    })
    .when('/sign_in', {
      templateUrl: 'views/user_sessions/new.html',
      controller: 'UserSessionsCtrl'
    })
    .when('/sign_up', {
      templateUrl: 'views/user_registrations/new.html',
      controller: 'UserRegistrationCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.factory('Group', ['$resource', function($resource) {
  return $resource('/api/groups/:id.json', null, {
    'update': { method:'PUT' }
  });
}]);

app.run(['$rootScope', '$location', function($rootScope, $location){
  $rootScope.$on('auth:login-success', function(){
    $location.path('/');
  });
}]);
