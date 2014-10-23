angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/', {templateUrl: 'app/partials/login.html', controller: 'LoginCtrl' });
      $routeProvider.when('/login', {templateUrl: 'app/partials/login.html', controller: 'LoginCtrl' });
      $routeProvider.when('/register', {templateUrl: 'app/partials/register.html', controller: 'RegisterCtrl' });
      $routeProvider.otherwise({redirectTo: '/'});
    }])
    .run(function ($rootScope) {
      $rootScope.$on('$viewContentLoaded', function () {
        $(document).foundation();
      });
    });