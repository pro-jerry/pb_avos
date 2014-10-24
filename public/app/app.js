var myApp = angular.module('myApp', ['ngRoute', 'ionic', 'myApp.filters', 'myApp.services', 'myApp.directives']).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/login', {templateUrl: 'app/partials/login.html', controller: 'LoginCtrl' });
      $routeProvider.when('/register', {templateUrl: 'app/partials/register.html', controller: 'RegisterCtrl' });
      $routeProvider.when('/home', {templateUrl: 'app/partials/home.html', controller: 'HomeCtrl' });
      $routeProvider.otherwise({redirectTo: '/login'});
    }])
    .run(function ($rootScope) {
      $rootScope.$on('$viewContentLoaded', function () {

      });
    });